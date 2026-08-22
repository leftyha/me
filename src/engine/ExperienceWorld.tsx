import { useScrollController } from './ScrollController';

interface Props {
  children: React.ReactNode;
}

export default function ExperienceWorld({ children }: Props) {
  useScrollController();

  return <div className="experience-world">{children}</div>;
}
