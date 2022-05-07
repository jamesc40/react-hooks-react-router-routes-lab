import React from "react";
import RenderDirector from './RenderDirector'
import { directors } from "../data";

function Directors() {
  return (
  	<div>
		<h1>Directors Page</h1>
		{directors.map((director, index) => <RenderDirector key={index} director={director} />)}

	</div>
	)
}

export default Directors;
