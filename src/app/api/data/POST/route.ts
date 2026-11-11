import { prisma } from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

try {
    const data = await request.json();
    const { title, category, price, status, image, year, is_tall } = data
    const newItem = await prisma.gallery.create({
        data: {
            title,
            category,
            description: 'Описание пока не задано',
            price: Number(price),
            status: [status],
            image,
            year: Number(year),
            is_tall: typeof is_tall === 'boolean' ? is_tall : false,
        },
        })

    return NextResponse.json({ item: newItem }, { status: 201 })
} catch (error) {
    console.log("Не удается создать работу", error);
    return NextResponse.json({ message: "Ну удалось создать работу" }, { status: 500 })
}}