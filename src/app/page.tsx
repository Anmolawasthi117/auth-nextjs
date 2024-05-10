// create a page having signup button and login button after clicking on them they redrict to the respective page
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to our website!</h1>
      <div className="space-x-4">
        <Link href="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
        <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Log In
        </Link>
      </div>
    </div>
  );
}
