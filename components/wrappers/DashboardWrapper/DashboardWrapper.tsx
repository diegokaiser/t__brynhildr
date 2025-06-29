import { ReactNode } from 'react';
import { Breadcrumbs, Header } from '@/components/organisms';
import Footer from '@/components/organisms/Footer';

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <Header />
      <div className="flex-grow-1 p-1 sm:p-3">
        {/* TODO TOOLBAR */}
        <div className="flex flex-col relative">
          <Breadcrumbs />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
