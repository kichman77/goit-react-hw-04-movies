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
      console.log(data.results);
      return data.results;
    });
};
const getMovieInfo = (movie_id) => {
  let params = `movie/${movie_id}?api_key=${key}&language=en-US`;
  return axios.get(url + params);
};
export default { getTrends, getMovieInfo };
