module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/variables.scss"; 
        @import "@/assets/scss/mixins.scss";
        `,
      },
    },
  },
};
