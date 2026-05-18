import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const items = await prisma.gallery.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(items)
  } catch (error) {
    return NextResponse.json({ error: 'Galeri öğeleri getirilemedi' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const item = await prisma.gallery.create({
      data: {
        id: randomUUID(),
        title: body.title,
        description: body.description || null,
        image: body.image,
        category: body.category || null,
        order: body.order || 0,
        active: body.active ?? true,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(item)
  } catch (error) {
    return NextResponse.json({ error: 'Galeri öğesi oluşturulamadı' }, { status: 500 })
  }
}
