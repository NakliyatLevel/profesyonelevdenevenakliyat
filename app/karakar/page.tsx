import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function AdminRootPage() {
  let session = null

  try {
    session = await auth()
  } catch (error) {
    console.error('[AdminRootPage] auth() failed', error)
  }

  if (session?.user) {
    redirect('/karakar/dashboard')
  }

  redirect('/karakar/login')
}
