/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#6D6D6D',
        white: '#FFFFFF',
        greyText: '#777777',
        greyBg: '#F6F6F6',
        brown: '#6D6D6D',
        bgGradient:
          'linear-gradient(180deg, #5088C1 0%, #70A4CE 50.29%, #AABFC9 100%)',
      },
      container: {
        center: true,
      },
      screens: {
        small: "480px",
        lgSmall: "1024px",
        lg: "1100px",
        lgBig: "1280px",
        xl: '1165px',
        "2xl": '1512px',
      },
      backgroundImage: {
        building:
          'url(../assets/building.png), linear-gradient(180deg, #5088C1 0%, #70A4CE 50.29%, #AABFC9 100%)',
        dashed: 'url(../assets/dashed.svg)',
        darkDashed: 'url(../assets/dark-dashed.svg)',
        triangle: 'url(../assets/triangle.svg)',
        greyBgImg: 'url(../assets/Rectangle 7.png)',
        darkTriangle: 'url(../assets/dark-triangle.svg)',
        greyBgImg2: 'url(../assets/grey-bg2.svg)',
        build: 'url(../assets/build.png) , url(../assets/grey-bg2.svg)',
        bgSection2: 'url(../assets/bg-section2.png)',
        greyBgImg3: 'url(../assets/grey-bg3.svg)',
        bgGradient:
          'linear-gradient(180deg, #5088C1 0%, #70A4CE 50.29%, #AABFC9 100%)',
        manPhone: 'url(../assets/man_phone.png)',
        bgFooter: "url(../assets/build-03.png)"
      },
      backgroundPosition: {
        positionBg: '190px 4px',
      },
    },
  },
  plugins: [],
};
