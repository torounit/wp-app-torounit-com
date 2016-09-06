import React  from 'react'
import Post from './Post'
import SinglePage from '../containers/SinglePage'
import { List,ListItem } from 'react-onsenui';
const PropTypes = React.PropTypes;

const Posts = ({ posts, onPostClick, navigator }) => (
	<div>
		<List
			renderRow={
				(post) =>
					<ListItem
						key={post.id}
						onClick={() => {
							onPostClick(post.id);
							navigator.pushPage({component: SinglePage,key: post.id});
						}}

					>
						<div className="center">{post.title.rendered}</div>
					</ListItem>
			}
			dataSource={posts}
		/>
	</div>
)

Posts.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.object.isRequired
	}).isRequired).isRequired,
	onPostClick: PropTypes.func.isRequired
}

export default Posts
