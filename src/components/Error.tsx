import { PropsWithChildren } from 'react';

const Error: React.FC<PropsWithChildren> = ({ children }) => (
  <span className="my-2 text-sm text-red-500">{children}</span>
);

export default Error;
