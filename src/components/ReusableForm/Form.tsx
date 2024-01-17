import { ReactNode, createContext } from 'react';
import cn from '../../utils/cn';

type TChildren = {
  children: ReactNode;
  onSubmit: () => void;
  double: boolean;
};

export const FormContextProvider = createContext<{ double: boolean | null }>(
  null
);

/* eslint-disable import/prefer-default-export */
export const Form = ({ children, onSubmit, double }: TChildren) => {
  return (
    <FormContextProvider.Provider value={{ double }}>
      <form
        className={cn('mx-auto max-w-md ', {
          'max-w-2xl px-5': double,
        })}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </FormContextProvider.Provider>
  );
};
