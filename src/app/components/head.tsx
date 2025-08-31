import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Ralph Riener Delena | Web Developer from the Philippines</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Portfolio of Ralph Riener Delena, a web developer from the Philippines specializing in frontend and backend development, clean code, and elegant digital solutions."
        />
        <meta
          name="keywords"
          content="Ralph Riener Delena, Web Developer Philippines, Frontend Developer, Backend Developer, Laravel, JavaScript, HTML, CSS, Portfolio"
        />
        <meta name="author" content="Ralph Riener Jardin Delena" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Ralph Riener Delena | Web Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Ralph Riener Delena, a web developer from the Philippines passionate about building elegant digital platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ralphjdelena.com" />
        <meta property="og:image" content="/images/01.jpg" />

        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-400">Ralph Riener Delena</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300">
          A Web Developer from the Philippines, building elegant, user-friendly
          digital platforms with clean and efficient code.
        </p>
      </main>
    </>
  );
}
