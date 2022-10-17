import React from 'react';

const DarkBtn = ({text}) => {
  return (
    <button className=' leading-none relative inline-block font-normal text-lg text-brown uppercase py-[6px] px-[39px] border-brown border-[1px]'>
      {text}
    </button>
  );
};

export default DarkBtn;
