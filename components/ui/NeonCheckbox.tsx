import { ComponentProps } from 'react';

export type CheckboxProps = ComponentProps<'input'> & {
  label?: string;
};

export default function NeonCheckbox({
  label,
  className,
  ...rest
}: CheckboxProps) {
  const cn = `neon-checkbox ${className || ''}`;

  return (
    <label className={cn}>
      <div className="neon-checkbox-label">{label ?? 'Choice'}</div>
      <input type="checkbox" {...rest} />
      <div className="neon-checkbox-box"></div>
    </label>
  );
}
