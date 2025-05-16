"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Sidebar = () => {
  const router = useRouter()

  return (
    <div className="bg-gray-100 w-64 h-screen p-4">
      <h2 className="text-2xl font-semibold mb-4">VenoStats</h2>

      <nav>
        <ul>
          <li className="mb-2">
            <Link href="/projects/venostats" className="block py-2 px-4 rounded hover:bg-gray-200">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/projects/venostats/analytics" className="block py-2 px-4 rounded hover:bg-gray-200">
              Analytics
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/projects/venostats/reports" className="block py-2 px-4 rounded hover:bg-gray-200">
              Reports
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/projects/venostats/settings" className="block py-2 px-4 rounded hover:bg-gray-200">
              Settings
            </Link>
          </li>
          <li className="mt-8 pt-4 border-t border-gray-200">
            <Link href="/" className="block py-2 px-4 rounded hover:bg-gray-200">
              Back to Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
