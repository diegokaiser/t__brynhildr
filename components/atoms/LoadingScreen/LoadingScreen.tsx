import React from 'react';
import Loader from '@/components/atoms/Loader';

const LoadingScreen = () => {
  return (
    <>
      <div className="loadingScreen backdrop-blur-[8px] bottom-0 fixed left-0 right-0 top-0 z-[1300]">
        <Loader />
      </div>
    </>
  );
};

export default LoadingScreen;
