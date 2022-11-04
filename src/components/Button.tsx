import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onCopy?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, onCopy, children }) => (
  <button
    type={type}
    className="rounded-full border border-slate-800 bg-slate-600 px-4 py-2 font-semibold uppercase text-slate-50 shadow hover:bg-slate-500"
    onClick={onCopy}
  >
    {children}
  </button>
);

export default Button;
