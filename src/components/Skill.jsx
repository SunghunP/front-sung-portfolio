import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
`;

export default function Skill ({name, description, skillLevel}) {
  return (
    <StyledDiv>
      {/* <h1>{name}</h1>
      <div>{description}</div>
      <div>{skillLevel}</div> */}
    </StyledDiv>
  );
};