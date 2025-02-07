import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-background pt-12 md:pt-56">
    <main className="mx-auto my-8 min-h-[calc(100vh-8rem)] max-w-2xl flex-auto px-4">
      {children}
    </main>
  </div>
);

export default Layout;
