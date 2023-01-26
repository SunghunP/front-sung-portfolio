import styled from 'styled-components';
import Skill from '../../components/Skill';
import mapDataToComponents from '../../helpers/mapDataToComponents';

const StyledDiv = styled.div`
  background: ${props => props.theme.reverseBackground};
  color: ${props => props.theme.reverseText};
  align-items: center;
  justify-content: center;

  .wrapper {
    flex-wrap: wrap;
    margin-bottom: 5%;
    align-items: center;
    justify-content: center;
  };

  h2 {
    color: ${props => props.theme.mainBackground};
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