const prod = process.env.NODE_ENV === "production";

export default {
  siteName: "Iminn",
  siteIcon: "",
  domainUrl: prod ? "https://iminn-football.com/" : "http://localhost:3000",
  apiUrl: "https://iminn-football.com/api/",
  imgUrl: "https://iminn-football.com/",
};
