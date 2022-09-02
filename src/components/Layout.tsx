import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="my-8 mx-auto min-h-[calc(100vh-8rem)] max-w-4xl flex-auto px-4 md:mt-12">
    {children}
  </main>
);

export default Layout;
