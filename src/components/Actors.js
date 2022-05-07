import React from "react";
import RenderActor from './RenderActor'
import { actors } from "../data";

function Actors() {
  return (
  	<div>
		<h1>Actors Page</h1>		
		{actors.map((actor, index) => <RenderActor key={index} actor={actor} />)}	
	</div>
	)
}

export default Actors;
