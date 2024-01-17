/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { FormContextProvider } from '.';

import { TChildren } from '../../types/TChildren';
import cn from '../../utils/cn';

/* eslint-disable import/prefer-default-export */
export const FormSection = ({ children }: TChildren) => {
  const { double } = useContext(FormContextProvider);

  return (
    <div
      className={cn('grid grid-cols-1', {
        'gap-3 md:grid-cols-2': double,
      })}
    >
      {children}
    </div>
  );
};
