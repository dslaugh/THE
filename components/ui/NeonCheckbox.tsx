import { ComponentProps } from 'react';

export type CheckboxProps = ComponentProps<'input'> & {
  label: string;
};

export default function NeonCheckbox({
  label,
  className,
  ...rest
}: CheckboxProps) {
  const cn = `neon-checkbox ${className || ''}`;

  return (
    <label className={cn}>
      <input type="checkbox" {...rest} />
      <span className="neon-checkbox-box"></span>
      <span className="neon-checkbox-label">{label}</span>
    </label>
  );
}