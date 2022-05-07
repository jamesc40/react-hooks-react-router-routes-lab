export default function RenderDirector({ director }) {
	const { name, movies } = director; 
	return (
		<div>
			<h2>{name}</h2>
			<ul>
				{movies.map((movie,index) => <li key={index}>{movie}</li>)} 
			</ul>
		</div>
	)
}
