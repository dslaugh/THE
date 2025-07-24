import { ComponentProps } from 'react';

export type RadioButtonProps = ComponentProps<'input'> & {
  label: string;
};

export default function NeonRadioButton({
  label,
  className,
  ...rest
}: RadioButtonProps) {
  const cn = `neon-radio-button ${className || ''}`;

  return (
    <label className={cn}>
      <input type="radio" {...rest} />
      <span className="neon-radio-button-box"></span>
      <span className="neon-radio-button-label">{label}</span>
    </label>
  );
}

/*
  return (
    <label className={cn}>
      <input type="radio" {...rest} />
      <span className="neon-radio-button-box"></span>
      <span className="neon-radio-button-label">{label}</span>
    </label>
  );
  */
