import type { ReactNode } from 'react';
import { useScrollController } from './ScrollController';

interface Props {
  children: ReactNode;
}

export default function ExperienceWorld({ children }: Props) {
  useScrollController();

  return <div className="experience-world">{children}</div>;
}
