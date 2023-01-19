import styled from "styled-components";

const StyledContentBody = styled.div`
	width: 100%;
	.half-column {
		width: 50vw;
		align-items: center;
		justify-content: center;
		padding: 30px;
	}

	.links {
		color: ${props => props.themes.mainText};
		text-decoration: none;
	}

	p div {
		margin: 5px;
	}
`;

export default function Home (themes) {
	return <StyledContentBody themes={themes}>
		<intro className='flex'>
			<div className="half-column flex col">
				<h1>Hi, I'm Sung!</h1>
				<p>
					<div>
						I am a Full Stack Web Developer based in Seattle Washington
					</div>
					<div>
						I love to write 
						<a className='links' href="https://soundcloud.com/joseph-park-775519631"> <i class="fa-solid fa-music"></i> Music <i class="fa-solid fa-music"></i>
						</a>,
					</div>
					<div>
						cook delicious meals <i class="fa-solid fa-utensils"></i>,
					</div>
					<div>
						and spend time with my dog!
					</div>
				</p>
			</div>

			<div className="half-column">
				img is supposed to be here
			</div>
		</intro>
		
	</StyledContentBody>
};