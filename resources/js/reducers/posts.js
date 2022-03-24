import { CREATE_POST, FETCH_ALL , UPDATE_POST } from "../actions/types";

const postAction = ( posts = [] , action ) => {
	switch(action.type){
		case UPDATE_POST : 
			return posts.map( (post) => post.id === action.payload.id ? action.payload : post );
		case FETCH_ALL : 
			return action.payload;
		case CREATE_POST : 
			return [...posts , action.payload];
		default:
			return posts;
		}
	}
	
	export default postAction;