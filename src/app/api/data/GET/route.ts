import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET() {
  try {
    const galereia = await prisma.gallery.findMany();
    return NextResponse.json({ galereia });
  } catch (error) {
    console.error('Не удалось загрузить каталог:', error);
    return NextResponse.json(
      { message: 'Не удалось загрузить каталог' },
      { status: 500 },
    );
  }
}
