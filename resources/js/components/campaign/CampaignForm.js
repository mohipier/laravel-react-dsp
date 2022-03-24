import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { createPost, updatePost } from '../../actions/post';


const CampaignForm = () => {
	const navigate = useNavigate();
	const params = useParams();
	const currentId = params ? params.id : null;
	const requireFile = currentId ? false : true;
	const [files, setFiles] = useState();
	const [postData, setPostData] = useState({
		id: '',
        name: '',
        from: new Date() , 
        to: new Date() ,
        daily_budget: 0,
        total_budget: 0,
		images: []
	});
	const post = useSelector((state) => (currentId ? state.posts.find((msg) => msg.id == currentId) : null));
  	const dispatch = useDispatch();

	
	  useEffect(() => {		
		if (post) setPostData(post);
	  }, [post]);

	  const convertToBase64 = (file) => {
		return new Promise((resolve, reject) => {
		  const fileReader = new FileReader();
		  fileReader.readAsDataURL(file);
		  fileReader.onload = () => {
			resolve(fileReader.result);
		  };
		  fileReader.onerror = (error) => {
			reject(error);
		  };
		});
	  };
	  const handleSubmit = async (e) => {
		e.preventDefault();
		
		postData.from = moment(postData.from).format('YYYY-MM-DD');
        postData.to = moment(postData.to).format('YYYY-MM-DD');
		
		if(files?.length)
		{
			let dataArray = [];
			for (let i = 0; i < files?.length; i++) {
				dataArray.push(await convertToBase64(files[i]));
			}
			postData.images = dataArray;
		}
		
		if (currentId == 0 || currentId == null) {
		  dispatch(createPost(postData));
		} else {
		  dispatch(updatePost(currentId, postData));
		}
		navigate('/');
	  };
	  
	return (
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
		<form onSubmit={handleSubmit}>
			<div className="form-group mb-2">
				<label htmlFor="name">Campaign Name</label>
				<input type="text" className="form-control" name="name" placeholder="Enter Name"
						value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} required/>
			</div>

			<div className="form-group mb-2">
				<label htmlFor="daily_budget">Daily Budget</label>
				<input type="number" className="form-control" name="daily_budget" placeholder="Enter Daily Budget"
						value={postData.daily_budget} onChange={(e) => setPostData({ ...postData, daily_budget: e.target.value })}/>
			</div>

			<div className="form-group mb-2">
				<label htmlFor="total_budget">Total Budget</label>
				<input type="number" className="form-control" name="total_budget" placeholder="Enter Total Budget"
						value={postData.total_budget} onChange={(e) => setPostData({ ...postData, total_budget: e.target.value })}/>
			</div>

			<div className="form-group  mb-2">
				<label htmlFor="from">From</label>
				<DatePicker name="from"
							className="form-control"
							dateFormat="yyyy-MM-dd"
							selected={new Date(postData.from)}
							onChange={(date) => setPostData({ ...postData, from: date })}
				/>
			</div>
			<div className="form-group  mb-2">
				<label htmlFor="to">To</label>
				<DatePicker name="to"
							className="form-control"
							dateFormat="yyyy-MM-dd"
							selected={new Date(postData.to)}
							onChange={(date) => setPostData({ ...postData, to: date })}
				/>
			</div>

			<div className="form-group  mb-2">
				<label htmlFor="files">Upload Files</label>
				<input type="file"  className="form-control" name="files" multiple
						onChange={(e) => setFiles(e.target.files)} required={requireFile}/>
			</div>
        
			<div className="form-group  mb-2">
				<button className="btn btn-info" variant="contained" color="primary" size="large" type="submit" >Submit</button>
			</div>

			
		</form>
				</div>
			</div>
		</div>
	</div>
  )
}

export default CampaignForm;