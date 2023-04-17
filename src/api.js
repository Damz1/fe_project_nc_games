import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://nc-games-pro.onrender.com/api",
});
export const getReviews = () => {
  return gamesAPI.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};
