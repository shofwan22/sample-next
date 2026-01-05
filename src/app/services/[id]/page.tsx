import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return services.map((s) => ({
    id: s.id,
  }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find(async (s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{service.name}</h1>
      <p className="mb-2">
        <strong>Category:</strong> {service.category}
      </p>
      <p className="mb-2">
        <strong>Impact Score:</strong> {service.impactScore}
      </p>
      <p className="text-gray-700 mt-4">{service.description}</p>
    </main>
  );
}
