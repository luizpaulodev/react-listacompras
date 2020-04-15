import axios from "axios";

export const services = {
  getImages: (product) => {
    const params = {
      key: "AIzaSyBAYEJtmy2hEce2PycYyRNAYUVgVl9fWdE",
      cx: "004521510356782360600:dvusgpboaer",
      searchType: "image",
      lr: "pt-br",
      num: 1,
      q: product,
    };

    return axios
      .get("https://www.googleapis.com/customsearch/v1", { params })
      .then((resp) => {
        resp.data.items[0].link;
      })
      .catch((err) => err);
  },
};
