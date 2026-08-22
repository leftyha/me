export type SceneId =
  | 'arrival'
  | 'mind'
  | 'transformation'
  | 'experience'
  | 'capabilities'
  | 'contact';

export interface SceneDefinition {
  id: SceneId;
  title: string;
  description: string;
}

export const scenes: SceneDefinition[] = [
  { id: 'arrival', title: 'Arrival', description: 'Meet the builder behind the systems.' },
  { id: 'mind', title: 'Mind Engine', description: 'How ideas connect into solutions.' },
  { id: 'transformation', title: 'Transformation', description: 'Turning complexity into systems.' },
  { id: 'experience', title: 'Experience', description: 'Enterprise, products and platforms.' },
  { id: 'capabilities', title: 'Capabilities', description: 'Tools used to create impact.' },
  { id: 'contact', title: 'Contact', description: 'Start building together.' },
];
