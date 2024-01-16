/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { DetailedHTMLProps, HTMLAttributes, MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import cn from '../../utils/cn';
import Button from './Button';

type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Modal({ isOpen, onClose, children }: TModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlerClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) onClose();
  };

  return createPortal(
    <div
      className={cn(
        'invisible fixed inset-0 z-[999] flex items-center justify-center bg-gray-600/70',
        {
          visible: isOpen,
        }
      )}
      onClick={handlerClose}
      role="button"
    >
      <div
        ref={containerRef}
        className="relative mx-auto max-w-sm rounded  bg-slate-300 p-4"
      >
        {children}
        <Button
          type="button"
          onClick={onClose}
          className="absolute right-0 top-0"
        >
          X
        </Button>
      </div>
    </div>,
    document.getElementById('portal') as Element
  );
}

export default Modal;
