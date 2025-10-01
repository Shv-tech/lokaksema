'use client';

import { prisma } from "@/lib/prisma";
import { Prisma, $Enums } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

// Strong, schema-accurate type for sessions that include speakers
type SessionWithSpeakers = Prisma.AgendaSessionGetPayload<{
  include: { speakers: true };
}>;

/** Helpers */
function stringOrNull(v: FormDataEntryValue | null): string | null {
  const s = v ? String(v) : "";
  return s.length ? s : null;
}
function numberOrNull(v: FormDataEntryValue | null): number | null {
  const s = v ? String(v) : "";
  if (!s.length) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

/** Server Action: create a session */
async function createSession(formData: FormData) {
  "use server";

  const title = String(formData.get("title") || "");
  if (!title) return;

  const typeStr = String(formData.get("type") || "TALK");
  const allowed = new Set(Object.values($Enums.SessionType));
  const type = allowed.has(typeStr as $Enums.SessionType)
    ? (typeStr as $Enums.SessionType)
    : $Enums.SessionType.TALK;

  const startStr = String(formData.get("startTime") || "");
  const endStr = String(formData.get("endTime") || "");

  const data: Prisma.AgendaSessionCreateInput = {
    title,
    description: stringOrNull(formData.get("description")),
    type,
    startTime: startStr ? new Date(startStr) : new Date(),
    endTime: endStr ? new Date(endStr) : new Date(),
    room: stringOrNull(formData.get("room")),
    track: stringOrNull(formData.get("track")),
    capacity: numberOrNull(formData.get("capacity")),
    materialsUrl: stringOrNull(formData.get("materialsUrl")),
    recordingUrl: stringOrNull(formData.get("recordingUrl")),
    // speakers: { connect: [{ id: "speakerId1" }, { id: "speakerId2" }] } // add if your form collects speaker IDs
  };

  await prisma.agendaSession.create({ data });
  revalidatePath("/(app)/admin/sessions");
}

export default async function AdminSessionsPage() {
  const sessions: SessionWithSpeakers[] = await prisma.agendaSession.findMany({
    orderBy: { startTime: "asc" },
    include: { speakers: true },
  });

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Agenda Sessions</h1>

      {/* Create Session */}
      <form action={createSession} className="card grid gap-3 mb-6">
        <input
          name="title"
          placeholder="Title"
          className="border rounded-md px-3 py-2"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border rounded-md px-3 py-2"
          rows={3}
        />

        <div className="grid grid-cols-2 gap-3">
          <select name="type" className="border rounded-md px-3 py-2" defaultValue="TALK">
            <option value="KEYNOTE">KEYNOTE</option>
            <option value="PANEL">PANEL</option>
            <option value="WORKSHOP">WORKSHOP</option>
            <option value="TALK">TALK</option>
            <option value="NETWORKING">NETWORKING</option>
            <option value="BREAK">BREAK</option>
          </select>

          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            className="border rounded-md px-3 py-2"
            min={0}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="datetime-local"
            name="startTime"
            className="border rounded-md px-3 py-2"
          />
          <input
            type="datetime-local"
            name="endTime"
            className="border rounded-md px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input name="room" placeholder="Room" className="border rounded-md px-3 py-2" />
          <input name="track" placeholder="Track" className="border rounded-md px-3 py-2" />
        </div>

        <input
          name="materialsUrl"
          placeholder="Materials URL"
          className="border rounded-md px-3 py-2"
        />
        <input
          name="recordingUrl"
          placeholder="Recording URL"
          className="border rounded-md px-3 py-2"
        />

        <button
          className="px-4 py-2 rounded-md text-white self-start"
          style={{ backgroundImage: "linear-gradient(90deg,#6B46C1,#8B5CF6)" }}
        >
          Create Session
        </button>
      </form>

      {/* Sessions List */}
      <div className="space-y-3">
        {sessions.map((session) => (
          <div key={session.id} className="p-3 border rounded-md">
            <div className="font-semibold">{session.title}</div>

            {(session.startTime || session.endTime) && (
              <div className="text-sm text-gray-600">
                {session.startTime
                  ? new Date(session.startTime).toLocaleString()
                  : "?"}{" "}
                →{" "}
                {session.endTime ? new Date(session.endTime).toLocaleString() : "?"}
              </div>
            )}

            <div className="text-sm text-gray-600">Type: {session.type}</div>

            {session.room && (
              <div className="text-sm text-gray-600">Room: {session.room}</div>
            )}
            {session.track && (
              <div className="text-sm text-gray-600">Track: {session.track}</div>
            )}
            {session.capacity !== null && session.capacity !== undefined && (
              <div className="text-sm text-gray-600">Capacity: {session.capacity}</div>
            )}

            {session.speakers.length > 0 && (
              <div className="text-sm text-gray-500">
                Speakers: {session.speakers.map((sp) => sp.fullName).join(", ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
