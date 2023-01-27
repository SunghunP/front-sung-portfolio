import styled from 'styled-components';
import profile from '../../assets/images/profile.jpg';
import { device } from '../../helpers/devices';

const StyledAboutSection = styled.div`
  width: 100%;
  padding: 0px;

	.gradient {
    min-width: 100%;
    min-height: 100%;
		background-image: linear-gradient(
    rgba(255,255,255,1) 0%, 
    rgba(28,28,28,0.1) 75%
		);
    padding: 4%;
    box-sizing: border-box;
	};

  .wrapper > div.half-column.flex.col {
    background-color: #1c1c1c;
  };

  .wrapper {
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 5px 10px 3px 2px rgba(28,28,28,0.4);
  };

	.half-column {
		width: 50vw;
    -webkit-align-items: center;
	  -webkit-justify-content: center;
		align-items: center;
		justify-content: center;
    max-height: 100%;
    background-color: ${props => props.theme.mainBackground};
	};

	.links {
		color: #1949c5;
		text-decoration: none;
	};

  div {
    font-size: 15px;
  };

	div p { 
		margin: 5%;
	};

  .profile-img {
    overflow: hidden;
    min-width: 100%;
    min-height: 100%;
    background-image: url(${profile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  };

  @media ${device.tablet} {
    h2 {
      font-size: 35px;
    };
    p {
      font-size: 25px;
    };
    div.profile-img {
      min-height: 500px;
    };
    div.half-column.flex.col {
      -webkit-justify-content: space-around;
      justify-content: space-around;
    };
  };
`;

export default function AboutSection({theme}) {
  return  (
    <StyledAboutSection className='about-section flex' theme={theme} profile={profile} id='about-section'>
      <div className='gradient flex'>
        <div className='wrapper flex'>
          <div className="half-column flex col">
            <h2>Hi, I'm Sung!</h2>
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
      </div>
    </StyledAboutSection>
  );
};