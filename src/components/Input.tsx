import { ChangeEventHandler } from 'react';

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ onChange }) => (
  <input
    className="w-full rounded-full border border-slate-800 bg-slate-600 py-2 px-4 text-slate-50 shadow"
    onChange={onChange}
    placeholder="Enter URL to extend."
  />
);

export default Input;
