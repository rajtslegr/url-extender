import { PropsWithChildren } from 'react';

const UrlBox: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="my-6 flex w-full flex-col break-all rounded-2xl border border-slate-800 bg-slate-600 p-2 text-slate-50 shadow">
    {children}
  </div>
);

export default UrlBox;
