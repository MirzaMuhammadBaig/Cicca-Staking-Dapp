import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center p-5">
      <div className="bg-white p-6 rounded shadow-md">

      <h1 className="text-center text-2xl font-semibold mb-4">Welcome To The Cicca World</h1>
      <div className="bg-white p-5 rounded">
      <Link className="bg-blue-700 text-white px-4 py-2 rounded mr-2" href="/staking">Staking</Link>
      <Link className="bg-red-700 text-white px-4 py-2 rounded mr-2" href="/bridge">Bridging</Link>
      <Link className="bg-green-700 text-white px-4 py-2 rounded " href="/swap">Swaping</Link>
    </div>
    </div>

  </div>
  )
}
