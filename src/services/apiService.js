import axios from "axios";
const key = "95b58f50e5859e7abe7cdc30e4fc7e3f";

const url = `https://api.themoviedb.org/3/`;

// const params = `?api_key=${key}`;
// let url = urls.trend + params;

const getTrends = () => {
  let params = `trending/movie/day?api_key=${key}`;
  return axios
    .get(url + params)
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .then((data) => {
      // console.log(data.results);
      return data.results;
    });
};
const getMovies = (query) => {
  let params = `search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios
    .get(url + params)
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .then((data) => {
      // console.log(data);
      return data.results;
    });
};
const getMovieInfo = (id) => {
  let params = `movie/${id}?api_key=${key}&language=en-US`;
  return axios
    .get(url + params)
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .then((data) => {
      // console.log(data);
      return data;
    });
};
const getCast = (id) => {
  let params = `movie/${id}/credits?api_key=${key}&language=en-US`;
  return axios
    .get(url + params)
    .then((response) => {
      // console.log(response);
      return response.data;
    })
    .then((data) => data.cast);
};
const getReviews = (id) => {
  let params = `movie/${id}/reviews?api_key=${key}&language=en-US&page=1`;
  return axios
    .get(url + params)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .then((data) => data.results);
};
export default { getTrends, getMovies, getMovieInfo, getCast, getReviews };
