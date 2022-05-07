export default function RenderMovie({ movie }) {
  const {title, time, genres} = movie
  return (
  	<div>
		<h2>Name: {title}</h2>	
		<p>Time: {time}</p>
		<p>Genres:</p>
		<ul>
			{genres.map((el, index) => <li key={index}>{el}</li>)}
		</ul>
	</div>
	)
}
