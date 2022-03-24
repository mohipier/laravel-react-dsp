import axios from 'axios';

const url = 'http://localhost/api';

export const fetchPosts = () => axios.get(url + '/campaigns');
export const createPost = (newPost) => axios.post(url + '/campaign' , newPost);
export const updatePost = (id, updatePost) => axios.post(`${url}/campaign/${id}/` , updatePost);
