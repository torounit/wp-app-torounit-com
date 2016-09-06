import React from 'react'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import { Page,PullHook } from 'react-onsenui'
import { connect } from 'react-redux'

const SinglePage = ({navigator,post}) => (
	<Page
		renderToolbar={() =>
			<Navbar title='Onsen Weather' backButton={true} navigator={navigator} />
		}>
		<Post {...post} />
	</Page>
);

const getCurrentPost = ( posts, id ) => {
	"use strict";
	let filtered = posts.filter( (post) => {
		return post.id == id
	} );

	return filtered[0];
};


const mapStateToProps = (state) => {
	return {
		post: getCurrentPost(state.posts, state.currentPost )
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SinglePage)


//export default SinglePage