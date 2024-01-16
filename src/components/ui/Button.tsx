/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { TVariant } from '../../types/TVariant';
import cn from '../../utils/cn';
import getVariant from '../../utils/getVariant';

type TButtonProps = {
  type: 'button' | 'submit' | 'reset';
} & ButtonHTMLAttributes<HTMLButtonElement> &
  TVariant;

const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ type, className, variant: buttonVariant, children, ...rest }, ref) => {
    const variantClass = getVariant(buttonVariant);

    return (
      <button
        type={type}
        {...rest}
        ref={ref}
        className={cn(variantClass, className)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
