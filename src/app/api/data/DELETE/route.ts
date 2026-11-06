import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  let data: unknown;

  try {
    data = await request.json() || {};
  } catch {
    return NextResponse.json({ message: 'Некорректный JSON' }, { status: 400 });
  }

  if (
    typeof data !== 'object' ||
    data === null ||
    !('id' in data) ||
    typeof data.id !== 'number' ||
    !Number.isInteger(data.id) ||
    data.id <= 0
  ) {
    return NextResponse.json({ message: 'Некорректный id работы или сама работа' }, { status: 400 });
  }

  try {
    const deletedItem = await prisma.gallery.deleteMany({
      where: { id: data.id },
    });

    return NextResponse.json({ message: 'Работа удалена' }, { status: 200 });
  } catch (error) {
    console.error('Ошибка при удалении работы:', error);
    return NextResponse.json({ message: 'Не удалось удалить работу' }, { status: 500 });
  }
}