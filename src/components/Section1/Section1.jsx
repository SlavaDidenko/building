import React from 'react';
const Section1 = () => {
  return (
    <section
      className="bg-left-bottom lg:mt-[-180px] min-h-[790px] max-w-[1512px] m-auto bg-build bg-no-repeat
     relative
    "
    >
      <div className=" relative container max-w-[1260px] px-[30px]">
        <div className="pt-[228px]">
          <div className=" pl-[28px] max-w-[505px] relative before:absolute before:h-[calc(100%-20px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
            <div
              className="relative mb-[30px]
            before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-22px] before:top-[14px]"
            >
              <h2 className=" mb-[5px] text-[28px] font-bold text-brown leading-[32px">
                More then 130 Developers Companyes for Your Project
              </h2>
              <p className=" text-sm font-normal text-brown leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
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
        </div>
      </div>
    </section>
  );
};

export default Section1;

// before:absolute before:right-0 before: top-0 before:h-full before:w-[calc(50%-3px)] before:bg-bgGradient before:-z-10
