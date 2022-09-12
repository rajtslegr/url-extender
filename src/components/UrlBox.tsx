import { PropsWithChildren } from 'react';

const UrlBox: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="my-6 flex w-full flex-col break-all rounded-2xl border p-2 shadow">
    {children}
  </div>
);

export default UrlBox;
