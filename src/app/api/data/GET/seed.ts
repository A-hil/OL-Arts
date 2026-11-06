import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL не задана');
}

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({adapter});

async function getAdminData() {
  await prisma.admin.createMany({
    data: [
      {name: "Alice", email: "alice@example.com", lastName: "Smith", description: "Alice is a talented artist known for her vibrant paintings."},
    ]
  })
}

async function getGalleryData() {
  await prisma.gallery.createMany({
    data: [
      {title: "Пост 1", category: "Категория 1",
      description: "Описание 1",
      price: 1000, status: ["В наличии"], is_tall: false,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      year: 2026},
      {title: "Пост 2", category: "Категория 1",
      description: "Описание 2",
      price: 5000, status: ["В наличии"], is_tall: false,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      year: 2025},
      {title: "Пост 3", category: "Категория 1",
      description: "Описание 3",
      price: 1230, status: ["Зарезервированно"], is_tall: true,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      year: 2026},
      {title: "Пост 4", category: "Категория 3",
      description: "Описание 4",
      price: 1600, status: ["В наличии"], is_tall: true,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      year: 2024},
      {title: "Пост 5", category: "Категория 3",
      description: "Описание 5",
      price: 13500, status: ["Зарезервированно"], is_tall: true,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      year: 2026},
      {title: "Пост 6", category: "Категория 2",
      description: "Описание 6",
      price: 800, status: ["Проданно"], is_tall: false,
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      year: 2024}
    ]
  })
}

getAdminData().then(() => prisma.$disconnect());
getGalleryData().then(() => prisma.$disconnect());
