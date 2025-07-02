'use client';

import React from 'react';
import { withAuth } from '@/hocs/withAuth';

const Page = () => {
  return (
    <>
      {/* 4 charts */}
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[50%] md:max-w-[50%] xl:basis-[25%] xl:max-w-[25%]">
        Page
      </div>
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[50%] md:max-w-[50%] xl:basis-[25%] xl:max-w-[25%]">
        Page
      </div>
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[50%] md:max-w-[50%] xl:basis-[25%] xl:max-w-[25%]">
        Page
      </div>
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[50%] md:max-w-[50%] xl:basis-[25%] xl:max-w-[25%]">
        Page
      </div>

      {/* 3 chart 1 chart */}
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[66.666667%] md:max-w-[66.666667%] xl:basis-[75%] xl:max-w-[75%]">
        Chart
      </div>
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[33.333333%] md:max-w-[33.333333%] xl:basis-[25%] xl:max-w-[25%]">
        Chart
      </div>

      {/* 1 chart 1 chart */}
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[50%] md:max-w-[50%] xl:basis-[50%] xl:max-w-[50%]">
        Chart
      </div>
      <div className="basis-[100%] flex-grow-0 max-w-[100%] pl-[22px] pt-9 md:basis-[50%] md:max-w-[50%] xl:basis-[50%] xl:max-w-[50%]">
        Chart
      </div>
    </>
  );
};

export default withAuth(Page);
