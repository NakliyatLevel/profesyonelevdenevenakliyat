import { PrismaClient } from '@prisma/client'
import { serviceAreaContent } from './data/service-area-content'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding service areas...')

  await prisma.serviceArea.deleteMany()

  for (const area of serviceAreaContent) {
    const timestamp = new Date()

    await prisma.serviceArea.upsert({
      where: { slug: area.slug },
      update: {
        city: area.city,
        description: area.description,
        metaTitle: area.metaTitle,
        metaDescription: area.metaDescription,
        content: area.content,
        order: area.order,
        active: true,
        updatedAt: timestamp,
      },
      create: {
        id: area.slug,
        city: area.city,
        slug: area.slug,
        description: area.description,
        metaTitle: area.metaTitle,
        metaDescription: area.metaDescription,
        content: area.content,
        order: area.order,
        active: true,
        updatedAt: timestamp,
      },
    })

    console.log(`✓ ${area.city} eklendi`)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
