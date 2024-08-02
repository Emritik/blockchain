/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
      ],
      theme: {
        extend: {},
      },
    },
  },
};

export default config;
