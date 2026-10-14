import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';



export async function GET() {
  const artists = await prisma.artist.findUnique({
    where: { email: "alice@example.com" }
  });
  const galereia = await prisma.gallery.findMany();
  return NextResponse.json({ artists, galereia });
}
