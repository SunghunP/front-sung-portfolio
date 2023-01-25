import styled from 'styled-components';

const StyledCard = styled.div`
	border: 1px red solid;
	width: 85%;
	margin: 3% 2%;
	height: 300px;

	.card-background {
		
	};

	div.card-title, div.card-content {
		margin: auto 5%;
	};

	.icons span i {
		margin: 5%;
		margin-left: 0%;
	};
`;

export default function Project({theme, e}) {
	return <StyledCard theme={theme} className='card' e={e} >
		<div className='card-background'>
			<div className='card-title'>
				<h3 className='title'>{e.name}</h3>
			</div>
			<div className='card-content flex col'>
				<div>{e.desc}</div>
				<div className='icons'>
					<span><i className="fa-brands fa-github"></i></span>
					<span><i className="fa-solid fa-link"></i></span>
				</div>
			</div>	
		</div>
	</StyledCard>
};