import styled from 'styled-components';
import resume from '../assets/resume/Sunghun_Park_Resume.pdf';
import { device } from '../helpers/devices';

const ResumeDiv = styled.div`
  width: 100%;
  padding: 10px 0px;

  a {
    width: 70%;
    text-decoration: none;
    border-radius: 50px;
  };

  button {
    margin: 10% auto;
    padding: 10%;
    width: 100%;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    background-image: linear-gradient(to right, #3F19C5 0%, #12D8FA  51%, #199FC5  100%);
    align-items: center;
    justify-content: space-around; 
    color: ${props => props.theme.mainText};
    box-shadow: 0px 0px 20px #3F19C5;
    background-size: 200% auto;
    cursor: pointer;
  };

  .wrapper{
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
  };

  @media ${device.mobileLg} {
    .button {
      font-size: 15px;
    }
  };
  @media ${device.tablet} {
    .button {
      font-size: 20px;
    }
  };
  @media ${device.tabletLg} {
    .button {
      font-size: 35px;
    }
  };
  @media ${device.laptop} {
    .button {
      font-size: 40px;
    }
  };
`;

export default function Resume({theme}) {
  return (
    <ResumeDiv theme={theme} >
      <div className='wrapper flex'>
        <a href={resume} target="_blank" rel='noreferrer' className='flex'>
          <button className='flex button'>
            <span>
              <i className="fa-regular fa-file"></i>
            </span>
            View my resume!
          </button>
        </a>
      </div>
    </ResumeDiv>
  );
};