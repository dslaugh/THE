export type ButtonProps = React.ComponentProps<'button'> & {
  children: React.ReactNode;
  variant?: 'default' | 'large' | 'secondary' | 'warning';
};

export default function NeonButton({
  children,
  className,
  variant,
  ...rest
}: ButtonProps) {
  let variantCss;

  switch (variant) {
    case 'large':
      variantCss = 'bg-[var(--neon-color)] py-4 px-8 text-lg';
      break;
    case 'secondary':
      variantCss = 'bg-gray-700 py-2 px-4 text-md';
      break;
    case 'warning':
      variantCss = 'bg-red-700 py-2 px-4 text-md ';
      break;
    default:
      variantCss = 'bg-[var(--neon-color)] py-3 px-6 text-lg';
      break;
  }

  const cn = `neon-button text-white font-bold rounded-lg uppercase ${variantCss} ${className || ''}`;
  return (
    <button {...rest} className={cn}>
      {children}
    </button>
  );
}
