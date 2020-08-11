import React from "react";

const Film = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);

export default Film;