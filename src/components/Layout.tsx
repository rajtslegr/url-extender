import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="min-h-screen bg-slate-800 pt-12 md:pt-56">
    <main className="my-8 mx-auto min-h-[calc(100vh-8rem)] max-w-2xl flex-auto px-4">
      {children}
    </main>
  </div>
);

export default Layout;
