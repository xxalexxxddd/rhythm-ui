import React from 'react';
import {Link} from 'gatsby';

import './Header.css';

export class Header extends React.Component {
	public render() {
		return (
			<header className="header">
				<Link to="/">Rhythm UI Design System</Link>
			</header>
		);
	}
}

export default Header;
