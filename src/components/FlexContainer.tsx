import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function FlexContainer({ children }: Props) {
  return <div className="flex-container">{children}</div>;
}
