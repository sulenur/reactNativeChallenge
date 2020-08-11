import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const FilmContext = createContext();

const FilmContextProvider = props => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {

    axios({
        "method":"GET",
        "url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key":"da9de3fe3emsh6ce97fe63600cddp199961jsn579386efa424",
        "useQueryString":true
        },"params":{
        "r":"json",
        "s":{query}
        }
        })
        .then((response)=>{
          console.log(response)
          setFilms(response.data.photos.photo);
          setLoading(false);
        })
        .catch((error)=>{
          console.log(error)
          console.log("Encountered an error with fetching and parsing data");
        });

  };
  return (
    <FilmContext.Provider value={{ films, loading, runSearch }}>
      {props.children}
    </FilmContext.Provider>
  );
};

export default FilmContextProvider;
