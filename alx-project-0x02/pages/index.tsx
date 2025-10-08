import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <Header />
      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to ALX Project 2 🚀
        </h2>
        <p className="mt-4 text-gray-600">
          This is a Next.js app scaffolded with TypeScript and Tailwind CSS.
        </p>
      </section>
    </main>
  );
}
