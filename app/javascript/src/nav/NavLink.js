
import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

const NavLink = ({ navLinkId, scrollToId }) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		console.log("nav")
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ block: "center", inline: "nearest", behavior: 'smooth' });
	};

	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
			onClick={handleClick}
		>
			{navLinkId}
		</span>
	);
};

export default NavLink;
