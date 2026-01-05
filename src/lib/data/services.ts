export type ServiceCategory = 'carbon' | 'water' | 'energy';

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  impactScore: number;
  description: string;
};

export const services: Service[] = [
  {
    id: 'carbon-offset',
    name: 'Carbon Offset Program',
    category: 'carbon',
    impactScore: 85,
    description:
      'Helps organizations offset carbon emissions through verified environmental projects.',
  },
  {
    id: 'water-restoration',
    name: 'Water Restoration Initiative',
    category: 'water',
    impactScore: 72,
    description:
      'Focuses on restoring water ecosystems and improving water sustainability.',
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy Adoption',
    category: 'energy',
    impactScore: 90,
    description:
      'Supports transition to renewable energy sources for long-term impact.',
  },
];
