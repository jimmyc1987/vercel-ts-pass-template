import Head from 'next/head'
import LoginButton from '@/components/LoginButton'

export default function Home() {
  return (
    <>
      <Head><title>Vercel‑TS + Pass Auth</title></Head>
      <main className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-semibold">Hello Futureverse 👋</h1>
        <LoginButton />
      </main>
    </>
  )
}
