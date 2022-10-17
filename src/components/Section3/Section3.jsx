import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
const Section3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    fade: true,
    customPaging: i => (
      <div className="h-[10px] bg-[#d9d9d9] rounded-[50%] border-grey border-solid border-[1px]"></div>
    ),
  };

  return (
    <section
      style={{ backgroundSize: '80%' }}
      className="bg-left-bottom min-h-[790px] mt-[-35px] max-w-[1512px] m-auto xl:bg-greyBgImg3 bg-no-repeat relative
       before:absolute before:h-[606px] before:w-[397px] before:left-0 before:bottom-[-15px] xl:before:left-auto xl:before:right-[330px] xl:before:top-[20px] before:bg-manPhone before:opacity-50 before:lgBig:opacity-100
  "
    >
      <div className=" relative container max-w-[1165px] px-[30px]">
        <div className="pt-[238px]">
          <Slider className=" max-w-[500px] m-auto xl:m-0" {...settings}>
            <div className="pb-[24px] sm:pb-[54px] pl-[22px] max-w-[500px] relative before:absolute before:h-[calc(100%-20px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
              <div
                className="relative mb-[30px]
          before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-16px] before:top-[14px]"
              >
                <h2 className="mb-[20px] sm:mb-[25px] text-[28px] font-bold text-brown leading-[32px">
                  Our Clients Saying
                </h2>
                <p className=" font-normal text-xs pl-[15px] mb-[20px] sm:mb-[28px]">
                  02 december 2022
                </p>
                <h4 className="mb-[10px] sm:mb-[15px] font-extrabold uppercase text-grey text-sm">
                  Otto Claus
                </h4>
                <p className=" text-sm font-normal text-brown leading-[30px]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </p>
                <a
                  className=" inline-block mt-[20px] sm:mt-[37px] font-normal text-sm leading-8 text-brown underline"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="pb-[24px] sm:pb-[54px] pl-[22px] max-w-[500px] relative before:absolute before:h-[calc(100%-20px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
              <div
                className="relative mb-[30px]
          before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-16px] before:top-[14px]"
              >
                <h2 className="mb-[20px] sm:mb-[25px] text-[28px] font-bold text-brown leading-[32px">
                  Our Clients Saying
                </h2>
                <p className=" font-normal text-xs pl-[15px] mb-[20px] sm:mb-[28px]">
                  02 december 2022
                </p>
                <h4 className="mb-[10px] sm:mb-[15px] font-extrabold uppercase text-grey text-sm">
                  Otto Claus
                </h4>
                <p className=" text-sm font-normal text-brown leading-[30px]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </p>
                <a
                  className=" inline-block mt-[20px] sm:mt-[37px] font-normal text-sm leading-8 text-brown underline"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="pb-[24px] sm:pb-[54px] pl-[22px] max-w-[500px] relative before:absolute before:h-[calc(100%-20px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
              <div
                className="relative mb-[30px]
          before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-16px] before:top-[14px]"
              >
                <h2 className="mb-[20px] sm:mb-[25px] text-[28px] font-bold text-brown leading-[32px">
                  Our Clients Saying
                </h2>
                <p className=" font-normal text-xs pl-[15px] mb-[20px] sm:mb-[28px]">
                  02 december 2022
                </p>
                <h4 className="mb-[10px] sm:mb-[15px] font-extrabold uppercase text-grey text-sm">
                  Otto Claus
                </h4>
                <p className=" text-sm font-normal text-brown leading-[30px]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </p>
                <a
                  className=" inline-block mt-[20px] sm:mt-[37px] font-normal text-sm leading-8 text-brown underline"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="pb-[24px] sm:pb-[54px] pl-[22px] max-w-[500px] relative before:absolute before:h-[calc(100%-20px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
              <div
                className="relative mb-[30px]
          before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-16px] before:top-[14px]"
              >
                <h2 className="mb-[20px] sm:mb-[25px] text-[28px] font-bold text-brown leading-[32px">
                  Our Clients Saying
                </h2>
                <p className=" font-normal text-xs pl-[15px] mb-[20px] sm:mb-[28px]">
                  02 december 2022
                </p>
                <h4 className="mb-[10px] sm:mb-[15px] font-extrabold uppercase text-grey text-sm">
                  Otto Claus
                </h4>
                <p className=" text-sm font-normal text-brown leading-[30px]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </p>
                <a
                  className=" inline-block mt-[20px] sm:mt-[37px] font-normal text-sm leading-8 text-brown underline"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="pb-[24px] sm:pb-[54px] pl-[22px] max-w-[500px] relative before:absolute before:h-[calc(100%-20px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
              <div
                className="relative mb-[30px]
          before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-16px] before:top-[14px]"
              >
                <h2 className="mb-[20px] sm:mb-[25px] text-[28px] font-bold text-brown leading-[32px">
                  Our Clients Saying
                </h2>
                <p className=" font-normal text-xs pl-[15px] mb-[20px] sm:mb-[28px]">
                  02 december 2022
                </p>
                <h4 className="mb-[10px] sm:mb-[15px] font-extrabold uppercase text-grey text-sm">
                  Otto Claus
                </h4>
                <p className=" text-sm font-normal text-brown leading-[30px]">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </p>
                <a
                  className=" inline-block mt-[20px] sm:mt-[37px] font-normal text-sm leading-8 text-brown underline"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Section3;
