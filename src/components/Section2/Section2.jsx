import DarkBtn from 'components/UI/DarkBtn/DarkBtn';
import React from 'react';

const Section2 = () => {
  return (
    <section
      className=" pt-[30px] bg-no-repeat"
    >
      <div
        className=" relative min-h-[580px] container max-w-[1270px] px-[30px] flex justify-center xl:justify-end
       before:absolute before:h-[765px] before:max-w-[790px] before:w-full before:bg-bgSection2 before:bg-cover before:bg-no-repeat before:xl:left-[30px] before:xl:top-[-140px] before:opacity-50 before:xl:opacity-100
      "
      >
        <div className="xl:w-[40%]">
          <div className=" pl-[28px] pb-[23px] max-w-[492px] relative before:absolute before:h-[calc(100%-30px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
            <div
              className="relative mb-[30px]
            before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-22px] before:top-[14px]"
            >
              <h2 className=" mb-[10px] text-[28px] font-bold text-brown leading-[32px">
                More then 15000 Clients Orders
              </h2>
              <p className=" text-sm font-normal text-brown leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <a
                className=" inline-block mt-[37px] font-normal text-sm leading-8 text-brown underline"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="">
            <DarkBtn text={'explore'}></DarkBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
