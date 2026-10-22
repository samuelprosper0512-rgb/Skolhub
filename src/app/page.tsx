import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Skolhub</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The complete school management platform for Nigeria.
      </p>
      <div className="flex gap-4">
        <Link href="/signup" className="bg-blue-600 text-white px-6 py-2 rounded">
          Sign Up School
        </Link>
        <Link href="/login" className="bg-gray-200 text-gray-800 px-6 py-2 rounded">
          Login
        </Link>
      </div>
    </div>
  )
}
