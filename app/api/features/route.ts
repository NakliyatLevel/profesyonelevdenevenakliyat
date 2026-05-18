import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const features = await prisma.feature.findMany({
      orderBy: { order: 'asc' },
    })

    return NextResponse.json({ success: true, data: features })
  } catch (error) {
    return NextResponse.json({ error: 'Özellikler getirilemedi' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const feature = await prisma.feature.create({
      data: {
        id: randomUUID(),
        title: body.title,
        description: body.description,
        icon: body.icon,
        order: body.order || 0,
        active: body.active !== undefined ? body.active : true,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json({ success: true, data: feature })
  } catch (error) {
    return NextResponse.json({ error: 'Özellik oluşturulamadı' }, { status: 500 })
  }
}
