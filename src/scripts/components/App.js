import React from 'react'
import Posts from '../containers/Posts'
import FrontPage from './FrontPage'
import { Navigator } from 'react-onsenui';

const renderPage = (route, navigator) => (
	<route.component key={route.key} navigator={navigator} />
);

const App = () => (
	<Navigator
		renderPage={renderPage}
		initialRoute={{component: FrontPage, key: 'MAIN_PAGE'}}
	/>
);



export default App