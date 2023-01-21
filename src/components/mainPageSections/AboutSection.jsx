import styled from 'styled-components';
import profile from '../../images/profile.jpg';

const StyledAboutSection = styled.div`
  width: 100%;
  padding: 10px auto;

  /* .gradient > div.half-column.flex.col {
    background: #1c1c1c;
  }

	.gradient {
    min-width: 100%;
    min-height: 100%;
		background-image: linear-gradient(
    rgba(25,73,197,1) 0%, 
    rgba(28,28,28,1) 100%
		);
    padding: 2%;
    box-sizing: border-box;
	} */

	.half-column {
		width: 50vw;
		align-items: center;
		justify-content: center;
    max-height: 100%;
    background-color: ${props => props.theme.mainBackground};
	}

	.links {
		color: ${props => props.theme.mainText};
		text-decoration: none;
	}

  h1 {
    font-size: 20px;
    margin: 5%;
  }

  div {
    font-size: 15px;
  }

	div p { 
		margin: 5%;
	}

  .profile-img {
    overflow: hidden;
    min-width: 100%;
    min-height: 100%;
    background-image: url(${profile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

export default function AboutSection({theme}) {
  return  <StyledAboutSection className='about-section flex' theme={theme} profile={profile}>
    <div className='gradient flex'>
      <div className="half-column flex col">
        <h1>Hi, I'm Sung!</h1>
        <div>
          <p>
            I am a Full Stack Web Developer based in Seattle Washington
          </p>
          <p>
            I love to write 
            <a className='links' href="https://soundcloud.com/joseph-park-775519631"> <i className="fa-solid fa-music"></i> Music <i className="fa-solid fa-music"></i>
            </a>,
          </p>
          <p>
            cook delicious meals <i className="fa-solid fa-utensils"></i>,
          </p>
          <p>
            and spend time with my golden retriever!
          </p>
        </div>
      </div>

      <div className="half-column">
        <div className='profile-img' alt="Image of Sung">
        </div>
      </div>
    </div>
  </StyledAboutSection>
}