/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    // screens:{
    //   ssm:'375px',
    //   sm:'640px',
    //   md:'768px',
    //   lg:'1024px',
    //   xl:'1700px',
    // },
    extend: {
      translate: {
        '1/3': '33.3333%',  // Adds translate-x-1/3 and translate-y-1/3
        '2/3': '66.6667%',  // Adds translate-x-2/3 and translate-y-2/3
      },
    },
  },
  plugins: [],
}

