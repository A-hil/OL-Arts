import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET() {
  const admin = await prisma.admin.findMany();
  const galereia = await prisma.gallery.findMany();
  return NextResponse.json({ admin, galereia });
}
