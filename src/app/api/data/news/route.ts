import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import type { NewsFormValues } from '../../../../types/news'

export async function GET() {
  const post = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(post)
}

export async function POST(request: Request) {
  try {
    const data: NewsFormValues = await request.json()
    const item = await prisma.post.create({ data })
    return NextResponse.json({ item }, { status: 201 })
  } catch (error) {
    console.error('Ошибка при создании новости:', error)
    return NextResponse.json({ message: 'Не удалось создать новость' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data }: { id: number } & NewsFormValues = await request.json()
    const item = await prisma.post.update({ where: { id }, data })
    return NextResponse.json({ item })
  } catch (error) {
    console.error('Ошибка при обновлении новости:', error)
    return NextResponse.json({ message: 'Не удалось обновить новость' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  let data: { id: number }
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ message: 'Некорректный JSON' }, { status: 400 })
  }

  try {
    await prisma.post.deleteMany({ where: { id: data.id } })
    return NextResponse.json({ message: 'Новость удалена' })
  } catch (error) {
    console.error('Ошибка при удалении новости:', error)
    return NextResponse.json({ message: 'Не удалось удалить новость' }, { status: 500 })
  }
}
