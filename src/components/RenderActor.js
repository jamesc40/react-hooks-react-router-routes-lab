export default function RenderActor({ actor }) {
  	const { name, movies } = actor;
 	return (
		<div>
			<h2>Name: {name}</h2>
			<ul>
				{movies.map((movie, index) => <li key={index}>{movie}</li>)}
			</ul>
			
		</div>
		)
}
