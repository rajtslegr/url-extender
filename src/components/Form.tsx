import { ChangeEventHandler, FormEventHandler } from 'react';

import CopyButton from './button/CopyButton';
import ExtendButton from './button/ExtendButton';
import Error from './Error';
import Input from './Input';

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCopy: () => void;
  error: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, onChange, onCopy, error }) => (
  <form
    onSubmit={onSubmit}
    className="flex w-full flex-col items-center justify-center space-y-4"
  >
    <div className="flex w-full flex-col items-center justify-center md:w-96">
      <Input onChange={onChange} />
      <Error>{error}</Error>
    </div>
    <div className="flex w-56 flex-row items-center justify-center space-x-2">
      <ExtendButton />
      <CopyButton onCopy={onCopy} />
    </div>
  </form>
);

export default Form;
