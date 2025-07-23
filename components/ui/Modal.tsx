import { useCallback, MouseEvent } from 'react';

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  handleClose?: () => void;
};

export default function Modal({
  children,
  className,
  handleClose,
  ...rest
}: ModalProps) {
  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose && handleClose();
      }
    },
    [handleClose]
  );
  return (
    <div
      {...rest}
      className={`z-50 modal-backdrop fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center ${className}`}
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  );
}
