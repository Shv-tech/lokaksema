// prisma/seed.ts
import { PrismaClient, Role, SessionType } from "@prisma/client";
import { addHours } from "date-fns";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Idempotent: bail if we already have any users
  const existing = await prisma.user.findFirst();
  if (existing) {
    console.log("Seed data already present. Skipping.");
    return;
  }

  // Admin user
  const adminPasswordHash = await hash("admin123", 10);
  const admin = await prisma.user.create({
    data: {
      email: "admin@lokaksema.io",
      role: Role.ADMIN,
      passwordHash: adminPasswordHash,
      firstName: "Lokasema",
      lastName: "Admin",
      organization: "Lokasema",
      title: "Administrator",
      bio: "Oversees the Lokasema conference experience.",
    },
  });

  // Speaker
  const speaker = await prisma.speaker.create({
    data: {
      fullName: "Asha Mehta",
      title: "CTO",
      organization: "Ethical AI Initiative",
      bio: "Leading visionary shaping the future of ethical AI.",
    },
  });

  // Sessions
  const start = new Date();
  await prisma.agendaSession.create({
    data: {
      title: "Opening Keynote",
      description: "Kickoff to Lokasema 2026 with key announcements and themes.",
      type: SessionType.KEYNOTE,
      startTime: start,
      endTime: addHours(start, 1),
      room: "Main Hall",
      speakers: { connect: [{ id: speaker.id }] },
    },
  });

  const panelStart = addHours(start, 2);
  await prisma.agendaSession.create({
    data: {
      title: "AI for Social Good",
      description: "Panel exploring AI applications for positive impact.",
      type: SessionType.PANEL,
      startTime: panelStart,
      endTime: addHours(panelStart, 1),
      room: "Auditorium B",
      speakers: { connect: [{ id: speaker.id }] },
    },
  });

  // Sponsor — NOTE: tier is a plain string in your current schema, and no "description" field.
  await prisma.sponsor.create({
    data: {
      companyName: "Globex AI",
      tier: "GOLD",
      websiteUrl: "https://globex.ai",
      contactName: "Samir Rao",
      contactEmail: "samir@globex.ai",
      // omit description/contractValue/logoUrl/etc. if your model doesn't have them
    },
  });

  // Waitlist sample
  await prisma.waitlist.create({
    data: {
      email: "guest1@example.com",
      firstName: "Guest",
      lastName: "One",
      interests: "Keynotes, Workshops",
    },
  });

  console.log("Database seeded successfully.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
