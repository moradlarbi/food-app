/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB577",
        secondary: "#2E2D33",
        white: withOpacityValue("--color-white"),
        background: "#19161B",
        grey: "#B8B8B8",
        bgBtn: "rgb(39, 37, 45)",
        bg: "hsla(0, 0%, 100%, 0.03)",
        categorie: "rgba(0,0,0,0.16)",
        darkGrey: withOpacityValue("--color-dark"),
        black: withOpacityValue("--color-black"),
        brown: withOpacityValue("--color-brown"),
        responav: "#161616",

      },
      fontSize: {
        title: ["3.5rem","4rem"],
        title2: ["48px","58px"],
        quote: ["72px","92px"]
      },
      aspectRatio: {
        '91/100': '91 / 100',
        '4/10': '5 / 10',
        '11/8': "1.3",
      },
      height: {
        "tiny": "1px",
        "img": "35rem",
        "2px": "2px",
        "story": "30rem"
      },
      gridTemplateColumns: {
        "minMax": "repeat(auto-fit, minmax(400px, 1fr))",
        "blog": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      margin: {
        '30': '120px',
      },
      maxHeight: {
        "100": "32rem",
      },
      
    },
  },
  plugins: [],
}
