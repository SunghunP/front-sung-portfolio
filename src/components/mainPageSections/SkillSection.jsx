import styled from 'styled-components';
import Skill from '../../components/Skill';
import mapDataToComponents from '../../helpers/mapDataToComponents';
import { device } from '../../helpers/devices';

const StyledDiv = styled.div`
  background: ${props => props.theme.reverseBackground};
  color: ${props => props.theme.reverseText};
  -webkit-justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  justify-content: center;

  .wrapper {
    flex-wrap: wrap;
    margin-bottom: 5%;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    justify-content: center;
  };

  h2 {
    color: ${props => props.theme.mainBackground};
  };

  @media ${device.tablet} {
    h2 {
      font-size: 40px;
    }
  };
`;

export default function SkillSection({theme, skillList}) {
  return <StyledDiv theme={theme} className='flex col' id='skills-section'>
    <h2>SKILLS</h2>
    <div className='wrapper flex'>
      {mapDataToComponents(skillList, Skill, theme)}
    </div>
  </StyledDiv>
};