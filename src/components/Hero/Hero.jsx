import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <section
      style={{ backgroundPosition: 'top -3% left 70%' }}
      className=" h-[593px] bg-building bg-center bg-no-repeat"
    >
      <div className=" container max-w-[1165px] mx-auto md:px-[30px]">
        <div className="md:p-5 w-fit h-[577px] absolute left-[30px] lgBig:left-[180px] top-[140px] md:top-[350px] before:absolute  before:h-[760px]  before:w-[760px]  before:bg-brown  before:block before:rotate-45 before:bottom-[-90px] before:md:bottom-[-46px] before:left-[-260px]">
          <div
            className=" pb-[50px] md:pb-[73px] px-[22px] max-w-[522px] relative
          before:absolute before:h-[calc(100%-30px)] before:w-[2px] before:bg-no-repeat before:bg-dashed before:left-0 before:top-[10px]"
          >
            <h1
              className="max-w-[304px] text-white font-bold text-[22px] md:text-[32px] mb-[15px] md:mb-[23px] relative
            before:absolute before:h-[18px] before:w-[18px] before:bg-triangle before:bg-no-repeat before:left-[-17px] before:top-[10px]"
            >
              {t('title')}
            </h1>
            <p className=" font-extrabold text-[14px] leading-6 md:leading-8 text-white mb-[12px] md:mb-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className=" font-normal text-[14px] leading-6 md:leading-8 text-white mb-[12px] md:mb-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className=" font-normal text-[14px] leading-6 md:leading-8 text-white mb-[12px] md:mb-[26px]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <a
              className="font-normal text-md leading-8 text-white underline"
              href="#"
            >
              Learn More
            </a>
          </div>
          <a
            className=" leading-none relative inline-block mt-[15px] font-normal text-lg text-white uppercase py-[6px] px-[35px] border-white border-[1px]"
            href="#"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;

// import React from 'react';

// const Hero = () => {
//   return (
//     <section
//       style={{ backgroundPosition: 'top -3% left 70%' }}
//       className=" h-[593px] bg-building bg-center bg-no-repeat"
//     >
//       <div className=" container max-w-[1165px] mx-auto md:px-[30px]">
//         <div className="p-5 w-fit  absolute top-[140px] md:top-[354px] md:left-[184px] before:absolute  before:h-[760px]  before:w-[760px]  before:bg-brown  before:block before:rotate-45 before:bottom-[-90px] before:md:bottom-[-10px] before:left-[-264px]">
//           <div className=" pb-[50px] md:pb-[73px] pl-[22px] max-w-[522px] relative
//           before:absolute before:h-[calc(100%-30px)] before:w-[2px] before:bg-no-repeat before:bg-dashed before:left-0 before:top-[10px]">
//             <h1 className="max-w-[304px] text-white font-bold text-[22px] md:text-[32px] mb-[15px] md:mb-[23px] relative
//             before:absolute before:h-[18px] before:w-[18px] before:bg-triangle before:bg-no-repeat before:left-[-17px] before:top-[10px]">
//               Building Anything and Even More...
//             </h1>
//             <p className=" font-extrabold text-md leading-6 md:leading-8 text-white mb-[12px] md:mb-[24px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//               <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
//               aliqua.
//             </p>
//             <p className=" font-normal text-md leading-6 md:leading-8 text-white mb-[12px] md:mb-[24px]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <p className=" font-normal text-md leading-6 md:leading-8 text-white mb-[12px] md:mb-[26px]">
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat
//             </p>
//             <a
//               className="font-normal text-md leading-8 text-white underline"
//               href="#"
//             >
//               Learn More
//             </a>
//           </div>
//           <a
//             className=" leading-none relative inline-block mt-[15px] font-normal text-lg text-white uppercase py-[6px] px-[35px] border-white border-[1px]"
//             href="#"
//           >
//             Register
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Hero;
