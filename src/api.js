import axios from "axios";

const gamesAPI = axios.create({
  baseURL: "https://nc-games-pro.onrender.com/api",
});
export const getReviews = () => {
  return gamesAPI.get("/reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};

export const getReviewById = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}`).then(({ data: { review } }) => {
    return review;
  });
};

export const getCommentsById = (review_id) => {
  return gamesAPI
    .get(`/reviews/${review_id}/comments`)
    .then(({ data: { comments } }) => {
      if (!comments) {
        return [];
      }
      return comments;
    });
};

export const patchReviewVotes = (review_id, incrementBy) => {
  return gamesAPI.patch(`/reviews/${review_id}`, { inc_votes: incrementBy });
};

export const postComment = (review_id, commentObj) => {
  return gamesAPI
    .post(`/reviews/${review_id}/comments`, commentObj)
    .then(({ data }) => {
      return data.createdComment[0];
    });
};
