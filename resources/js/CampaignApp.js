import React , { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter,Routes,Route} from "react-router-dom";

import NavbarMenu from './components/layouts/NavbarMenu'
import { getPosts } from './actions/post';
import CampaignList from './components/campaign/CampaignList';
import CampaignForm from './components/campaign/CampaignForm';

const CampaignApp = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	} , [dispatch]);
	return (
		<div>
			<BrowserRouter>
				<NavbarMenu/>
				<Routes>
					<Route path="/" element={<CampaignList />}/>
					<Route path="/add" element={<CampaignForm />}/>
					<Route path="/add/:id" element={<CampaignForm />}/>
				</Routes>
            </BrowserRouter>
		</div>
	);
}

export default CampaignApp;