import styled from 'styled-components';
import { device } from '../helpers/devices';

const StyledCard = styled.div`
	width: 85%;
	margin: 3% 2%;
	min-height: 350px;
	height: 100%;
	border-radius: 10px;
	color: ${props => props.theme.mainText};
	border: 1px solid ${props => props.theme.mainAccent};
	box-shadow: 0px 0px 5px 1px ${props => props.theme.mainAccent};
	overflow: hidden;
	position: relative;
	
	.card-text {
		background-color: rgba(28, 28, 28, 0.85);
		z-index: 888;
	};

	.inner {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		width: 100%;
		height: 100%;
	};

	.title {
		font-size: 25px;
		margin: 0px;
	};

	img {
		width: inherit;
	};

	.card-title, .card-content {
		margin: 3% 5%;
	};

	.card-content {
		font-size: 20px;
		height: inherit;
		justify-content: space-between;
	};

	.icons a span {
		margin: 3%;
		margin-left: 0px;
		margin-top: 5px;
		color: ${props => props.theme.mainAccent};
	};

	.div-items {
		font-size: 0.75em;
		flex-wrap: wrap;

		.div-item {
			margin: auto 10px;
			margin-left: 0px;
		};
	};

  @media ${device.tablet} {
		min-height: 400px;
    h3.title {
      font-size: 35px;
    };
    .card-content {
      font-size: 20px;
    };
	};

	@media ${device.tabletLg} {
		min-height: 500px;
		h3.title {
      font-size: 40px;
    };
    .card-content {
      font-size: 30px;
    };
	};

	@media ${device.laptop} {
		min-height: 700px;
		h3.title {
      font-size: 60px;
    };
    .card-content {
      font-size: 40px;
    };
	};
`;

export default function Project({theme, e}) {

	function mapToSpan (arr) {
		return arr.map((item, idx) => (
			<div className='div-item' key={idx} >{item} </div>
		))
	}

	return <StyledCard theme={theme} className='card flex col' e={e} >
		<img src={e.img} alt={e.desc} className='inner' />
		<div className='card-text flex col inner'>
			<div className='card-title'>
				<h3 className='title'>{e.name}</h3>
			</div>
			
			<div className='card-content flex col'>
				<div className='card-content-item'>{e.desc}</div>
				<div className='card-content-item div-items flex'>
					{mapToSpan(e.technologies)}
				</div>
				<div className='card-content-item icons'>
					<a href={e.repo} className='icon'>
						<span className="fa-brands fa-square-github"></span>
					</a>
					<a href={e.website} className='icon'>
						<span className="fa-solid fa-arrow-up-right-from-square"></span>
					</a>
				</div>
			</div>	
		</div>
	</StyledCard>
};