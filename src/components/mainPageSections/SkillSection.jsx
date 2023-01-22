import styled from 'styled-components';

const StyledDiv = styled.div`
  background: ${props => props.theme.reverseBackground};
  color: ${props => props.theme.reverseText};
`;

export default function SkillSection({theme}) {
  return <StyledDiv theme={theme}>
    Skill section
  </StyledDiv>
}