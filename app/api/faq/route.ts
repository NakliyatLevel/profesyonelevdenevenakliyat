import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const faqs = await prisma.fAQ.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(faqs)
  } catch (error) {
    return NextResponse.json({ error: 'SSS getirilemedi' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const faq = await prisma.fAQ.create({
      data: {
        id: randomUUID(),
        question: body.question,
        answer: body.answer,
        category: body.category || null,
        order: body.order || 0,
        active: body.active ?? true,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json(faq)
  } catch (error) {
    return NextResponse.json({ error: 'SSS oluşturulamadı' }, { status: 500 })
  }
}
