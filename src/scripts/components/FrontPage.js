import React from 'react'
import Posts from '../containers/Posts'
import Navbar from './Navbar'
import { Toolbar, Page, PullHook } from 'react-onsenui';

const FrontPage = ({navigator}) => (
	<Page
		renderToolbar={() =>
			<Navbar title='Onsen Weather' navigator={navigator} />
		}>
		<Posts navigator={navigator} />
	</Page>
);


export default FrontPage