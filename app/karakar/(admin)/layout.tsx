import AdminSidebar from '@/components/admin/admin-sidebar'
import AdminHeader from '@/components/admin/admin-header'
import { Toaster } from '@/components/ui/toaster'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let session = null

  try {
    session = await auth()
  } catch (error) {
    console.error('[AdminLayout] auth() failed', error)
  }

  if (!session?.user) {
    redirect('/karakar/login')
  }

  const user = {
    name: session.user.name || 'Admin',
    email: session.user.email || 'admin@example.com',
  }

  return (
    <div className="min-h-screen bg-muted/50">
      <AdminHeader user={user} />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Toaster />
    </div>
  )
}
