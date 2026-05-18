import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: 'Yorumlar getirilemedi' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const review = await prisma.review.create({
      data: {
        id: randomUUID(),
        name: body.name,
        comment: body.comment,
        rating: body.rating || 5,
        location: body.location || null,
        approved: body.approved || false,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(review)
  } catch (error) {
    return NextResponse.json({ error: 'Yorum oluşturulamadı' }, { status: 500 })
  }
}
