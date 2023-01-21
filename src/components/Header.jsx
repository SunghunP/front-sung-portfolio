import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background: ${props => props.theme.mainBackground};
	height: 15%;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	border-bottom: 1px solid #1c1c1c;

	.links {
		color: ${props => props.theme.mainText};
		text-decoration: none;
		margin: 0 3%;
	}

	a.hover-animation {
		font-size: 15px;
		margin: 5% 10px;
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

export default function Header ({theme}) {
	return <StyledHeader theme={theme} className='flex'>
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