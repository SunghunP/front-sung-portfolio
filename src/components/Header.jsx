import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background: ${props => props.theme.mainBackground};
	height: 15%;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	box-shadow: 0px 0px 5px 5px rgba(28, 28, 28, 0.4);
	z-index: 999;

	.links {
		color: ${props => props.theme.mainText};
		text-decoration: none;
		margin: 0px 3%;
	};

	a.hover-animation {
		font-size: 13px;
		margin: 5% 10px;
		display: inline-block;
		position: relative;
		padding: 5px 0px;

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
			margin: -5px 0px;
		};

		:hover::after {
			transform: scaleX(1);
			transition: transform 0.23s ease-in;
			transform-origin: bottom left;
		};
	};
`;

export default function Header ({theme}) {
	return <StyledHeader theme={theme} className='flex'>
		<Link className='links' to='/'>Sung Hun Park</Link>
		<nav className='flex'>
			<a className='links hover-animation' href="#about-section">
				About Me
			</a>
			<a className='links hover-animation' href="#skills-section">
				Skills
			</a>
			<a className='links hover-animation' href="#projects-section">
				Projects
			</a>
		</nav>
	</StyledHeader>
};