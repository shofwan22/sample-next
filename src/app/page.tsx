import { HomeClient } from '@/components/HomeClient';

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2 text-primary">
        Environmental Impact Dashboard
      </h1>
      <p className="mb-6 text-foreground">
        A simplified overview of environmental services and their impact.
      </p>
      <HomeClient />
    </main>
  );
}
