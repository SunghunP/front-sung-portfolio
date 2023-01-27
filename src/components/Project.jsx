import styled from 'styled-components';
import { device } from '../helpers/devices';

const StyledCard = styled.div`
	width: 85%;
	margin: 3% 2%;
	min-height: 300px;
	display: grid;
	overflow: hidden;
	border-radius: 10px;
	color: ${props => props.theme.mainText};
	border: 1px solid ${props => props.theme.mainAccent};
	box-shadow: 0px 0px 5px 1px ${props => props.theme.mainAccent};

	.card-text {
		background-color: rgba(28, 28, 28, 0.85);
		z-index: 888;
	}

	.card-text, img {
		grid-column: 1;
		grid-row: 1;
	};

	.title {
		font-size: 25px;
		margin: 20px auto;
	}

	img {
		width: 100%;
		height: 100%;
	}

	div.card-title, div.card-content {
		margin: auto 4% ;
	};

	.card-content {
		height: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 20px;
	}

	.icons a i {
		margin: 5%;
		margin-left: 0%;
		color: ${props => props.theme.mainAccent};
	};

	.span-item {
		font-size: 0.75em;
	}

  @media ${device.tablet} {
    h3.title {
      font-size: 35px;
    };
    .card-content {
      font-size: 20px;
    };
	};

	@media ${device.tabletLg} {
		h3.title {
      font-size: 40px;
    };
    .card-content {
      font-size: 30px;
    };
	};
`;

export default function Project({theme, e}) {

	function mapToSpan (arr) {
		return arr.map((item, idx) => (
			<span className='span-item' key={idx} >{item} </span>
		))
	}

	return <StyledCard theme={theme} className='card' e={e} >
		<img src={e.img} alt={e.desc}/>
		<div className='card-text flex col'>
			<div className='card-title'>
				<h3 className='title'>{e.name}</h3>
			</div>
			
			<div className='card-content flex col'>
				<div className='card-content-item'>{e.desc}</div>
				<div className='card-content-item'>
					{mapToSpan(e.technologies)}
				</div>
				<div className='icons card-content-item'>
					<a href={e.repo} >
						<i className="fa-brands fa-github"></i>
					</a>
					<a href={e.website}>
						<i className="fa-solid fa-up-right-from-square"></i>
					</a>
				</div>

			</div>	
		</div>
	</StyledCard>
};