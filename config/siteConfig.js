const prod = process.env.NODE_ENV === "production";

export default {
  siteName: "Iminn",
  siteIcon: "",
  domainUrl: prod ? "https://iminn-football.com/" : "http://localhost:3000",
  apiUrl: "https://iminn-football.com/api/",

  // CLOUDINARRY CONFIGS
  cloud: {
    name: "iminn-cloud",
    apiKey: "547794789486815",
    secretKey: "T6jclG_MuFCWz3ng2wVlTh7BwzE",
    env:
      "CLOUDINARY_URL=cloudinary://547794789486815:T6jclG_MuFCWz3ng2wVlTh7BwzE@iminn-cloud",
    deliveryUrl: "https://res.cloudinary.com/iminn-cloud",
    apiBaseUrl: "https://api.cloudinary.com/v1_1/iminn-cloud/image/upload",
  },
};
