import styled from 'styled-components';
import { device } from '../helpers/devices';
const StyledFooter = styled.footer`
	height: 150px;
	align-items: center;
	justify-content: center;
	margin: auto 5%;
	margin-top: 20px;
	padding-top: 30px;
	text-align: center;

	.icon {
		margin: 10px;
		color: ${props => props.theme.mainText};
	}


	.button {
		font-size: 20px;
		border-radius: 30px;
		border: 2px solid  ${props => props.theme.mainBackground};
		color: ${props => props.theme.mainText};
		background: ${props => props.theme.mainDarkMode};
		padding: 20px;
		text-decoration: none;
		margin-bottom: 20px;
	}

	.button:hover {
		cursor: pointer;
	}

	i, div {
		font-size: 24px;
	}

	@media ${device.tablet} {
	};
`; 

export default function Footer ({theme}) {
	return <StyledFooter className='footer flex col' theme={theme}>
		<div className='button-wrapper'>
			<a href="mailto:sung.pkp@gmail.com" target="_blank" rel='noopener noreferrer' className='email-link'>
				<button className='button'>Send me a message!</button>
			</a>
		</div>

		<div>If you have any questions or concerns please feel free to reach out!</div>

		<div className='icon-wrapper flex'>
			<a href='https://github.com/SunghunP' className='icon'>
				<i className="fa-brands fa-square-github"></i>
			</a>
			<a href='https://www.linkedin.com/in/sunghunp/' className='icon'>
				<i className="fa-brands fa-linkedin"></i>
			</a>

		</div>
	</StyledFooter>
};