import { ReactNode } from 'react';

type TChildren = {
  children: ReactNode;
};

function Container({ children }: TChildren) {
  return <div className="mx-auto h-full w-full max-w-7xl">{children}</div>;
}

export default Container;
