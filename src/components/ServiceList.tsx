import { Service } from '@/lib/data/services';
import { ServiceCard } from './ServiceCard';

type Props = {
  services: Service[];
};

export function ServiceList({ services }: Props) {
  if (services.length === 0) {
    return <p className="text-sm text-gray-500">No services found.</p>;
  }

  return (
    <div className="grid gap-4">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
