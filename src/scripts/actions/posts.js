"use strict";
import wp from '../api/wp';

//Actions
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const requestPosts = ( filter = {} ) => {
	return {
		type: REQUEST_POSTS,
		filter
	}
}

export const receivePosts = ( filter = {} , posts  ) => {
	return {
		type: RECEIVE_POSTS,
		filter,
		posts,
		receivedAt: Date.now()
	}
}

export const fetchPosts = ( filter = {} ) => {

	return ( dispatch ) => {

		dispatch(requestPosts(filter));

		return wp.posts().then(function( data ) {
			dispatch(receivePosts(filter, data));
		})
	}
}