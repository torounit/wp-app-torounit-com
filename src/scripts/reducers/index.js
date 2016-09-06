"use strict";
import { combineReducers } from 'redux'
import posts from './posts'
import currentPost from './currentPost'
import connection from './connection'

const reducers = combineReducers({
	connection,
	posts,
	currentPost
});

export default reducers;