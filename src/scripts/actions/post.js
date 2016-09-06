"use strict";
import wp from '../api/wp';
//Actions
export const VIEW_POST = 'VIEW_POST'

export const viewPost = (  id ) => {
	return {
		type: VIEW_POST,
		id
	}
}