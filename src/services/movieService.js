import Request from "../helpers/Request";

const key = process.env.REACT_APP_API_KEY;

export const getAllMovies = async (value) => {
  const response = await Request(`${value}&apikey=${key}`);
  if(response.Response === "True"){
    return response.Search;
  }
  if(response.Response === "False"){
    console.log(response.Error);
  }
  return false;
};
