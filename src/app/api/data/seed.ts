import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL не задана');
}

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({adapter});

async function getArtistData() {
  await prisma.artist.createMany({
    data: [
      {name: "Alice", email: "alice@example.com", lastName: "Smith", description: "Alice is a talented artist known for her vibrant paintings."},
    ]

  })
}

async function getGalleryData() {
  await prisma.gallery.createMany({
    data: [
      {title: "Пост 1", category: "Керамика",
      description: "A gallery showcasingcontemporary art from around the world.",
      price: 100, status: ["В наличии"], is_tall: true,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      year: 2026},
    ]
  })
}

getArtistData().then(() => prisma.$disconnect());
getGalleryData().then(() => prisma.$disconnect());
