export function toICS({
uid,
title,
description = "",
location = "",
start,
end,
url,
}: {
uid: string
title: string
description?: string
location?: string
start: Date
end: Date
url?: string
}) {
const dt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
return [
"BEGIN:VCALENDAR",
"VERSION:2.0",
"PRODID:-//Lokasema 2026//EN",
"CALSCALE:GREGORIAN",
"BEGIN:VEVENT",
`UID:${uid}`,
`DTSTAMP:${dt(new Date())}`,
`DTSTART:${dt(start)}`,
`DTEND:${dt(end)}`,
`SUMMARY:${escapeICS(title)}`,
`DESCRIPTION:${escapeICS(description)}`,
`LOCATION:${escapeICS(location)}`,
url ? `URL:${url}` : "",
"END:VEVENT",
"END:VCALENDAR",
]
.filter(Boolean)
.join("\r\n")
}


function escapeICS(text: string) {
return text.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,|;/g, (m) => `\\${m}`)
}