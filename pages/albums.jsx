import React from 'react'

export const getStaticProps = async () => {

	const res = await fetch(
		'https://jsonplaceholder.typicode.com/albums');
  let allAlbums = await res.json();
  
	return {
		props: {
			allAlbums: allAlbums.map((album) => album.title)
		}
	}
}

const Albums = ({ allAlbums }) => {
	return (
		<div>
			<h1>All Albums</h1>
			{allAlbums.map((album, idx) => (
				<div key={idx}>{album}</div>))
			}
		</div>
	)
}

export default Albums
