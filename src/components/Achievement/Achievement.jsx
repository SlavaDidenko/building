import DarkBtn from 'components/UI/DarkBtn/DarkBtn';
import React from 'react';
import mainPict from '../../assets/img/main-pict.png';
const Achievement = () => {
  const arrAchievementInfo = [
    [1500, 'Active Development Projects'],
    [12000, 'Active Fix or Repire Projects'],
    [26000, 'Finished Projects'],
  ];

  return (
    <section
      style={{ backgroundPosition: 'right 10px', backgroundSize: '80%' }}
      className=" pt-[290px] lg:pt-0 max-w-[1512px] m-auto w-full lg:bg-greyBgImg bg-no-repeat min-h-[790px]"
    >
      <div className=" relative container max-w-[1165px] px-[30px] flex justify-end">
        <div>
          <ul className=" mt-[80px] pl-[28px] pb-[62px] pr-[40px] lg:pr-[66px] max-w-[522px] relative before:absolute before:h-[calc(100%-30px)] before:w-[2px] before: bg-no-repeat before:bg-darkDashed before:left-0 before:top-[14px]">
            {arrAchievementInfo.map((item, index) => (
              <li
                key={index}
                className="relative mb-[30px]
            before:absolute before:h-[18px] before:w-[18px] before:bg-darkTriangle before:bg-no-repeat before:left-[-22px] before:top-[14px]"
              >
                <p className=" font-light text-brown text-[40px] leading-[48px]}">
                  {item[0]}
                </p>
                <h3 className=" text-[24px] font-extrabold text-brown leading-[125%]">
                  {item[1]}
                </h3>
              </li>
            ))}
          </ul>
          <DarkBtn text={'explore'}></DarkBtn>
        </div>
        <div className=" absolute opacity-30 lg:opacity-100 block left-[130px] bottom-[-268px]">
          <img src={mainPict} alt="main-pict" />
        </div>
      </div>
    </section>
  );
};

export default Achievement;


