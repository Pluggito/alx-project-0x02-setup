import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <Header />

      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Page ℹ️</h1>
        <p className="text-gray-600 mb-10">
          This page demonstrates a reusable Button component with size and shape props.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </section>
    </main>
  );
}
