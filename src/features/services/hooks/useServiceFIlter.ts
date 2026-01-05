'use client';

import { useMemo, useState } from 'react';
import { Service, ServiceCategory } from '@/lib/data/services';
import { filterServices } from '../utils/filterServices';

export function useServiceFilter(services: Service[]) {
  const [category, setCategory] = useState<ServiceCategory | 'all'>('all');

  const filteredServices = useMemo(() => {
    return filterServices(services, { category });
  }, [services, category]);

  return {
    category,
    setCategory,
    services: filteredServices,
  };
}
