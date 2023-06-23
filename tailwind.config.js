const renderWidth = (part, full) => {
  return `${(100 / full) * part}%`;
};

const calcWidth = (percent, minusPart) => {
  return `calc(${percent}% - ${minusPart}rem)`;
};

module.exports = {
  // mode: 'jit',
  content: [
    // './src/**/*.tsx'
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundSize: {
      '60%': '60%',
    },
    extend: {
      backgroundImage: {
        main: "url('./assets/Images/Background.png')",
        // transfer: "url('./assets/Images/TransferGrainBg.png')",
      },
      minwidth: {
        '22p': '22px',
      },
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
      },
      border: {
        border16: 'border-r-16',
        1: '1px',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      fontSize: {
        xss: '10px',
        m: '20px',
        s: '14px',
      },
      colors: {
        pink: {
          DEFAULT: '#F0AEFD',
        },
        purple: {
          DEFAULT: '#5E5BF9',
          hover: '#4b48c7',
          purpleDisabled: '#eeeefd',
          blackPurple: 'rgba(94, 91, 249, 0.2)',
        },
        lightpurple: {
          DEFAULT: '#BF93FC',
        },
        red: {
          DEFAULT: '#EB5757',
          hover: '#e84040',
        },
        green: {
          DEFAULT: '#42C092',
          hover: '#3aae84',
          btnText: '#00BF9D',
        },
        white: {
          DEFAULT: '#fff',
          sixty: 'rgba(255, 255, 255, 0.6)',
          forty: 'rgba(255, 255, 255, 0.4)',
          seventy: 'rgba(255, 255, 255, 0.7)',
          light: 'rgba(255, 255, 255, 0.85)',
        },
        black: {
          dark: '#1F1E25',
          darkest: '#16151A',
          DEFAULT: '#0E0E11',
          border: '#33333F',
          background: 'rgba(0,0,0,0.5)',
          iconWrapper: 'rgba(65, 192, 146, 0.08)',
        },
      },
      backgroundcolor: {
        gradient: {
          bgpurple: 'linear-gradient(55.2deg, #6860F9 50%, #EFADFC 99.49%)',
        },
      },
      width: {
        '112px': '112px',
        15: '60px',
        '70px': '70%',
        '80px': '80%',
        '370px': '370px',
        27: '27%',
        '5px': '5px',
        '288px': '288px',
        '196px': '196px',
        '100%-288px': 'calc(100% - 288px)',
        '448px': '448px',
        '488px': '488px',
        '750px': '750px',
        '826px': '826px',
        '563px': '563px',
        '800px': '800px',
        'full-scroll': 'calc(100% - 6px)',
        '1/13': renderWidth(1, 13),
        '1.5/13': renderWidth(1.5, 13),
        '2/13': renderWidth(2, 13),
        '3/13': renderWidth(3, 13),
        '4/13': renderWidth(4, 13),
        '5/13': renderWidth(5, 13),
        '6/13': renderWidth(6, 13),
        '7/13': renderWidth(7, 13),
        '8/13': renderWidth(8, 13),
        '9/13': renderWidth(9, 13),
        '10/13': renderWidth(10, 13),
        '11/13': renderWidth(11, 13),
        '12/13': renderWidth(12, 13),
        '1/16': renderWidth(1, 16),
        '1.5/16': renderWidth(1.5, 16),
        '2/16': renderWidth(2, 16),
        '2.5/16': renderWidth(2.5, 16),
        '3/16': renderWidth(3, 16),
        '3.5/16': renderWidth(3.5, 16),
        '4/16': renderWidth(4, 16),
        '5/16': renderWidth(5, 16),
        '6/16': renderWidth(6, 16),
        '7/16': renderWidth(7, 16),
        '8/16': renderWidth(8, 16),
        '9/16': renderWidth(9, 16),
        '10/16': renderWidth(10, 16),
        '11/16': renderWidth(11, 16),
        '12/16': renderWidth(12, 16),
        '13/16': renderWidth(13, 16),
        '14/16': renderWidth(14, 16),
        '15/16': renderWidth(15, 16),
        '1/3-0.5rem': calcWidth(33, 0.5),
        '1/3-1rem': calcWidth(33, 1),
        '1/3-2rem': calcWidth(33, 2),
        '1/2-2rem': calcWidth(50, 2),
        '1/2-1rem': calcWidth(50, 1),
        '1/3-3rem': calcWidth(33, 3),
      },

      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      height: {
        '1px': '1px',
        '25px': '25px',
        '98px': '98px',
        '26px': '26px',
        834: '834px',
        '80vh': '82vh',
        '65vh': '65vh',
        '75vh': '70vh',
        '500px': '500px',
        '100vh-6rem': 'calc(100vh - 6rem)',
        '100vh-88px': 'calc(100vh - 88px)',
        '100%-50px': 'calc(100% - 50px)',
        '100%-84px': 'calc(100% - 84px)',
        '100vh-152px': 'calc(100vh - 152px)',
        '100%-87.4px': 'calc(100% - 87.4px)',
        '43%-15px': 'calc(50% - 15px)',
        '50%-7px': 'calc(50% - 7px)',
        '587px': '587px',
        '440px': '470px',
        15: '60px',
      },
      top: {
        '30rem': '30rem',
      },
      fontSize: {
        'text-s': '14px',
      },
      padding: {
        '05': '2px',
        '12px': '11px',
        450: '490px',
      },
      zIndex: {
        60: 60,
        65: 65,
        70: 70,
        75: 75,
        80: 80,
        100: 100,
        999: 999,
      },
      boxShadow: {
        custom: '41px 34px 96px 14px rgba(0,0,0,0.62)',
      },
      animation: {
        growDown: 'growDown 0.8s ease-in-out both',
      },
      keyframes: {
        growDown: {
          '0%': {
            transform: 'translateY(-10%)',
          },
          '100%': {
            transform: 'translateY(0))',
          },
        },
      },
      transformOrigin: {
        'top-center': 'top center',
      },
      screens: {
        '2xl-s': { max: '1540px' },
        '3xl-s': { min: '1600px' },
        '3xl': { min: '1875px' },
        'lgm': { min: '1200px' },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
