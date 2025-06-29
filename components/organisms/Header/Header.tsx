import React from 'react';

const Header = () => {
  return (
    <header className="backdrop-blur-[8px] box-border fixed flex flex-col left-auto ml-[280] shadow-none right-0 shrink-0 text-white top-0 z-[1200]">
      <div className="flex items-center min-h-[74px] px-4 py-2 relative md:px-6 xl:px-16">
        <button
          className="b-0 bg-[#f3f5f7] box-border cursor-pointer h-11 inline-flex items-center justify-center m-0 outline-0 p-2 relative rounded-[8px] text-[#5b6b79] w-11 xl:-ml-4 hover:bg-[#dbe0e5]"
          style={{ transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}
        >
          <span className="pi pi-bars"></span>
        </button>
        {/* search */}
        <div className="ml-0 w-full lg:ml-[16px]">
          <div className="align-top b-0 inline-flex flex-col m-0 min-w-0 p-0 relative w-[100%] lg:w-[224px]">
            <div className="box-border text-[#1d2630] cursor-text font-normal inline-flex items-center leading-[1.4375em] pl-[14px] relative rounded-[8px] text-xs">
              <div className="flex h-[0.1em] items-center min-h-[2em] text-[rgba(0, 0, 0, 0.54)] -mr-1 whitespace-nowrap">
                <div className="pi pi-search text-[#5b6b79]"></div>
              </div>
              <input
                type="text"
                className="b-0 bg-transparent block !box-content h-[20px] m-0 min-w-0 p-3 w-full"
                placeholder="Ctrl + K"
              />
              <fieldset
                className="absolute bottom-0 border border-[#bec8b0] border-solid left-0 m-0 min-w-0 overflow-hidden p-0 pointer-events-none right-0 top-0"
                style={{ borderRadius: 'inherit' }}
              ></fieldset>
            </div>
          </div>
        </div>
        {/* language */}
        <div className="ml-1 shrink-0 min-w-[44px]">
          <button
            className="b-0 bg-[#f3f5f7] box-border cursor-pointer h-11 inline-flex items-center justify-center m-0 outline-0 p-2 relative rounded-[8px] text-[#5b6b79] w-11 xl:-ml-4 hover:bg-[#dbe0e5]"
            style={{
              textDecoration: 'none',
              transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }}
          >
            <span className="pi pi-language"></span>
          </button>
        </div>
        {/* alerts */}
        <div className="ml-1 shrink-0 min-w-[44px]">
          <button
            className="b-0 bg-[#f3f5f7] box-border cursor-pointer h-11 inline-flex items-center justify-center m-0 outline-0 p-2 relative rounded-[8px] text-[#5b6b79] w-11 xl:-ml-4 hover:bg-[#dbe0e5]"
            style={{
              textDecoration: 'none',
              transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }}
          >
            <span className="pi pi-bell"></span>
            <span
              className="absolute bg-[#2ca87f] box-border flex flex-wrap items-center justify-center h-4 leading-1 right-[4px] rounded-full p-1 text-xs text-white top-[2px] w-4 z-10"
              style={{ transform: 'scale(1) translate(50%, -50%)' }}
            >
              2
            </span>
          </button>
        </div>
        {/* userProfile */}
        <div className="ml-[6px] shrink-0 min-w-[44px]">
          <button
            className="b-0 bg-[#f3f5f7] box-border cursor-pointer h-11 inline-flex items-center justify-center m-0 outline-0 p-2 relative rounded-[8px] text-[#5b6b79] w-11 xl:-ml-4 hover:bg-[#dbe0e5]"
            style={{
              textDecoration: 'none',
              transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }}
          >
            <span className="pi pi-user"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
