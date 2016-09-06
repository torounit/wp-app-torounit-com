import React from 'react'
const PropTypes = React.PropTypes;

const Post = ({ title, content }) => (
	<article style={{margin: '16px'}}>
		<h5 className="center">{title.rendered}</h5>
		<div dangerouslySetInnerHTML={ {__html: content.rendered }} />
	</article>
)

Post.propTypes = {
	title: PropTypes.object.isRequired,
	content: PropTypes.object.isRequired
}

export default Post
