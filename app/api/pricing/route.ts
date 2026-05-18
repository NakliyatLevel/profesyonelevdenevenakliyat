import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const settings = await prisma.pricingSetting.findMany()
    return NextResponse.json(settings)
  } catch (error) {
    return NextResponse.json({ error: 'Fiyatlandırma ayarları getirilemedi' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const setting = await prisma.pricingSetting.create({
      data: {
        id: randomUUID(),
        type: body.type,
        key: body.key,
        value: body.value,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json(setting)
  } catch (error) {
    return NextResponse.json({ error: 'Fiyatlandırma ayarı oluşturulamadı' }, { status: 500 })
  }
}
