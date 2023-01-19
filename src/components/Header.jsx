import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background: ${props => props.themes.mainBackground};
	height: 65px;
	font-size: 30px;
	justify-content: space-between;
	align-items: center;
	position: sticky;

	.links {
		color: ${props => props.themes.mainText};
		text-decoration: none;
		margin: 0 30px;
	}

	a.hover-animation {
		font-size: 20px;
		margin: 0 15px;
		display: inline-block;
		position: relative;
		padding: 5px 0;

		::after {
			content:'';
			position: absolute;
			width: 100%;
			height: 3px;
			bottom: 0;
			left: 0;
			border-radius: 20px;
			background-color: #11ACD1;
			transform-origin: bottom right;
			transition: transform 0.25s ease-out;
			transform: scaleX(0);
			margin: -5px 0;
		}

		:hover::after {
			transform: scaleX(1);
			transition: transform 0.23s ease-in;
			transform-origin: bottom left;
		}
	}

`;

export default function Header ({themes}) {
	return <StyledHeader themes={themes} className='flex'>
		<Link className='links' to='/'>Sung Hun Park</Link>
		<nav className='flex'>
			<Link className='links hover-animation' to='/about'>
				About Me
			</Link>
			<Link className='links hover-animation' to='/skills'>
				Skills
			</Link>
			<Link className='links hover-animation' to='/projects'>
				Projects
			</Link>
		</nav>
	</StyledHeader>
};