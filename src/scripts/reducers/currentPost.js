import { VIEW_POST } from '../actions/post';


const currentPost =(state = 0, action ) => {
	"use strict";
	switch (action.type) {

		case VIEW_POST :
			let { id } = action;
			return id;

		default:
			return state
	}
};

export default currentPost;