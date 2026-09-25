import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-gradient-to-b from-sky-50 to-blue-100 px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-blue-800 sm:text-6xl">
        Hello World
      </h1>
      <p className="text-sm text-slate-600">Your app is up and running.</p>
    </div>
  );
}
