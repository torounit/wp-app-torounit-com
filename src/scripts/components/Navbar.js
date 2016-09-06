import React from 'react'
import { Toolbar,BackButton } from 'react-onsenui';

class Navbar extends React.Component {

	render() {
		let {title, navigator, backButton}  = this.props;
		return (
			<Toolbar>
				<div className='left'>
					{backButton ? <BackButton onClick={() => navigator.popPage()}>Back</BackButton> : null}
				</div>
				<div className='center'>{title}</div>
			</Toolbar>
		)
	}
}

export default Navbar