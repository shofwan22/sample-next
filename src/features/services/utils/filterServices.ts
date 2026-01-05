import { Service, ServiceCategory } from '@/lib/data/services';

type FilterParams = {
  category: ServiceCategory | 'all';
};

export function filterServices(
  services: Service[],
  { category }: FilterParams
): Service[] {
  if (category === 'all') {
    return services;
  }

  return services.filter((service) => service.category === category);
}
