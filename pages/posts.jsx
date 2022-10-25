import React from 'react'

export const getServerSideProps = async (context) => {

	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts');
	let allPosts = await res.json();

	return {
		props: {
			allPosts: allPosts.map((post) => post.title)
		}
	}
}

const Posts = ({ allPosts }) => {
	return (
		<div>
			<h1>All Posts</h1>
			{allPosts.map((post, idx) => (
				<div key={idx}>{post}</div>))}
		</div>
	)
}

export default Posts
