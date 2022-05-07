import React from "react";
import RenderMovie from './RenderMovie'
import { movies } from "../data";

function Movies() {
  return (
  	<div>
		<h1>Movies Page</h1>
		{movies.map((movie, index) => <RenderMovie key={index} movie={movie} />)}
	</div>
	)
}

export default Movies;
