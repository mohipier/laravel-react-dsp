import { FETCH_ALL, CREATE_POST, UPDATE_POST } from './types';
import * as api from '../api';

// Action creators
export const getPosts = () => async (dispatch) => {
	try{
		const { data } = await api.fetchPosts();
		dispatch({ type: FETCH_ALL , payload: data });
	} catch(error) {
		console.log(error);
	}
}

export const createPost = (post) => async (dispatch) => {
	try{
		const { data } = await api.createPost(post);
		dispatch({ type: CREATE_POST , payload: data });
	} catch(error) {
		console.log(error);
	}
}

export const updatePost = (id, post) => async (dispatch) => {
	try{
		const { data } = await api.updatePost(id, post);
		dispatch({ type: UPDATE_POST , payload: data });
	} catch(error) {
		console.log(error);
	}
}
