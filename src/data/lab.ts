export interface LabExperiment {
  title: string;
  description: string;
  areas: string[];
}

export const labExperiments: LabExperiment[] = [
  {
    title: 'Customer Intelligence',
    description: 'Exploring connections between users, data and decisions.',
    areas: ['Product', 'Data', 'Business'],
  },
  {
    title: 'Digital Experiences',
    description: 'Exploring new interactions between environments and software.',
    areas: ['UX', 'Platforms'],
  },
  {
    title: 'Emergent Systems',
    description: 'Exploring systems where simple rules create complex behavior.',
    areas: ['Simulation', 'Algorithms'],
  },
];
