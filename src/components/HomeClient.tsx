'use client';

import { services } from '@/lib/data/services';
import { useServiceFilter } from '@/features/services/hooks/useServiceFilter';
import { FilterBar } from './FilterBar';
import { ServiceList } from './ServiceList';

export function HomeClient() {
  const {
    category,
    setCategory,
    services: filteredServices,
  } = useServiceFilter(services);

  return (
    <>
      <FilterBar value={category} onChange={setCategory} />
      <ServiceList services={filteredServices} />
    </>
  );
}
