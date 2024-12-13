/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Minecraft': ['Minecraft', 'sans-serif'],
        'IBM-PLEX-MONO': ["IBM Plex Mono", "monospace"],
        'Handjet': ["Handjet", 'sans-serif'],
        'Eight-Bit-Dragon': ["EightBitDragon", 'sans-serif'],
        'Rajdhani': ["Rajdhani", 'sans-serif'],
        'Pixeboy': ['Pixeboy', 'sans-serif'],
        'Public-sans' : ["Public Sans", 'sans-serif'] ,
        'Futura-Black' : ['FuturaBlack', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}

