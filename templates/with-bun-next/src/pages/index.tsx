import Head from "next/head";

export default function Home({}) {
  return (
    <div className="container m-0 h-screen p-2 sm:p-0 flex justify-center items-center flex-col">
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-red m-3" />
    </div>
  );
}
