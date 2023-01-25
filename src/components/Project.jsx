import styled from 'styled-components';

const StyledCard = styled.div`
	border: 1px red solid;
	align-items: center;
	justify-content: space-between;
`;

export default function Project({theme, e}) {
	return <StyledCard theme={theme} className='card flex'>
		<div className='card-title'>
			<h3 className='title'>{e.name}</h3>
		</div>
		<div className='card-content flex col'>
			<div>{e.desc}</div>
			{/* <img src> */}
		</div>
	</StyledCard>
};