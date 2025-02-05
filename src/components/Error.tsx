import { ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}

const Error = ({ children }: ErrorProps) => (
  <span className="my-2 h-2 text-sm text-red-500">{children}</span>
);

export default Error;
