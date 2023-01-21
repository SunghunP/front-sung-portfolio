import styled from 'styled-components';

const ResumeDiv = styled.div`
  width: 100%;
  padding: 10%;
`;

export default function Resume() {
  return (
    <ResumeDiv>
      <button>Click Here to Download my resume!</button>
    </ResumeDiv>
  )
}