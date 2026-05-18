import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const pages = await prisma.page.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ success: true, data: pages })
  } catch (error) {
    return NextResponse.json({ error: 'Sayfalar getirilemedi' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const page = await prisma.page.create({
      data: {
        id: randomUUID(),
        slug: body.slug,
        title: body.title,
        content: body.content,
        seoTitle: body.seoTitle || null,
        seoDesc: body.seoDesc || null,
        seoKeywords: body.seoKeywords || null,
        published: body.published || false,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json(page)
  } catch (error) {
    return NextResponse.json({ error: 'Sayfa oluşturulamadı' }, { status: 500 })
  }
}
