import styled from 'styled-components';
import Skill from '../../components/Skill';

const StyledDiv = styled.div`
  background: ${props => props.theme.reverseBackground};
  color: ${props => props.theme.reverseText};
`;

export default function SkillSection({theme}) {
  return <StyledDiv theme={theme}>
    <h1>Skills</h1>
    <Skill></Skill>
  </StyledDiv>
};