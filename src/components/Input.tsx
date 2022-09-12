import { ChangeEventHandler } from 'react';

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ onChange }) => (
  <div className="flex flex-col">
    <input
      className="rounded-full border py-2 px-4 shadow"
      onChange={onChange}
      placeholder="Enter URL to extend."
    />
  </div>
);

export default Input;
