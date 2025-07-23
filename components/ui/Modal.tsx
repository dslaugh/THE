type ModalProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Modal({ children, className, ...rest }: ModalProps) {
  return (
    <div
      {...rest}
      className={`modal-backdrop fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
