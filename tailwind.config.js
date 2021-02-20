module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
