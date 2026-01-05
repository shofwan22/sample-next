import Link from 'next/link';
import { Service } from '@/lib/data/services';

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="block border rounded p-4 hover:shadow-sm transition border-muted hover:border-primary"
    >
      <h3 className="font-semibold text-lg mb-1 text-secondary">{service.name}</h3>
      <p className="text-sm text-foreground mb-2">Category: {service.category}</p>
      <p className="text-sm text-primary">Impact Score: {service.impactScore}</p>
    </Link>
  );
}
