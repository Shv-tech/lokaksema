import { PrismaClient, Role } from '@prisma/client';
import { addHours } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findFirst();
  if (existing) {
    console.log('Seed data already present. Skipping.');
    return;
  }

  const admin = await prisma.user.create({
    data: {
      email: 'admin@lokaksema.io',
      name: 'Conference Admin',
      role: Role.ADMIN,
      password: '',
      profile: {
        create: {
          company: 'Lokaksema',
          title: 'Administrator',
          bio: 'Oversees the Lokaksema conference experience.'
        }
      }
    }
  });

  const speaker = await prisma.speaker.create({
    data: {
      name: 'Asha Mehta',
      title: 'CTO',
      company: 'Innovate Labs',
      bio: 'Leading visionary shaping the future of ethical AI.'
    }
  });

  const keynote = await prisma.session.create({
    data: {
      title: 'Opening Keynote',
      description: 'Kickoff to Lokaksema 2026 with key announcements and themes.',
      location: 'Main Hall',
      startsAt: new Date(),
      endsAt: addHours(new Date(), 1),
      ownerId: admin.id,
      speakers: {
        connect: { id: speaker.id }
      }
    }
  });

  await prisma.session.create({
    data: {
      title: 'AI for Social Good',
      description: 'Panel exploring AI applications for positive impact.',
      location: 'Auditorium B',
      startsAt: addHours(new Date(), 2),
      endsAt: addHours(new Date(), 3),
      ownerId: admin.id,
      speakers: {
        connect: { id: speaker.id }
      }
    }
  });

  await prisma.waitlistEntry.createMany({
    data: [
      { email: 'guest1@example.com', name: 'Guest One' },
      { email: 'guest2@example.com', name: 'Guest Two' }
    ]
  });

  await prisma.auditLog.create({
    data: {
      action: 'seed:completed',
      actorId: admin.id,
      metadata: {
        message: 'Initial seed executed.'
      }
    }
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.();
  });
