'use client';

import { ServiceCategory } from '@/lib/data/services';

type Props = {
  value: ServiceCategory | 'all';
  onChange: (value: ServiceCategory | 'all') => void;
};

const categories: (ServiceCategory | 'all')[] = [
  'all',
  'carbon',
  'water',
  'energy',
];

export function FilterBar({ value, onChange }: Props) {
  return (
    <div className="flex gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded border text-sm capitalize ${
            value === category
              ? 'bg-primary text-white border-primary'
              : 'bg-muted text-secondary border-secondary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
