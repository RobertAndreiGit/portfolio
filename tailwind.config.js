module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      keyframes: false,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        2: "2",
        3: "3",
      },
      backgroundColor: {
        skills: "#00fefe",
        experience: "#aaffa7",
        education: "#cadfdf",
        projects: "#fdead2",
      },
      padding: {
        "1/10": "10%",
      },
      width: {
        "40/100": "40%",
        "45/100": "45%",
        "6/10": "60%",
        "95/100": "95%",
      },
      animation: {
        "slide-in-1": "1s ease 0s 1 forwards slideIn",
        "slide-in-2": "1s ease 1s 1 forwards slideIn",
        "slide-in-3": "1s ease 2s 1 forwards slideIn",
        "slide-in-4": "1s ease 3s 1 forwards slideIn",
        "slide-out-4": "1s ease 3s 1 forwards slideOut",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "1" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "1" },
        },
      },
      margin: {
        40: "40%",
      },
    },
    fontFamily: {
      title: ["Montserrat"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
