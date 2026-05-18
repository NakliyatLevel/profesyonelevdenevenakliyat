import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ success: true, data: services })
  } catch (error) {
    return NextResponse.json({ error: 'Hizmetler getirilemedi' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const service = await prisma.service.create({
      data: {
        id: randomUUID(),
        name: body.name,
        slug: body.slug,
        description: body.description || null,
        content: body.content || null,
        image: body.image || null,
        icon: body.icon || null,
        metaTitle: body.metaTitle || null,
        metaDescription: body.metaDescription || null,
        order: body.order || 0,
        active: body.active !== undefined ? body.active : true,
        showOnHomepage: body.showOnHomepage !== undefined ? body.showOnHomepage : true,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true, data: service })
  } catch (error) {
    return NextResponse.json({ error: 'Hizmet oluşturulamadı' }, { status: 500 })
  }
}
