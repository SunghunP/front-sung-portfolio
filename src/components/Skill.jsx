import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 0px auto;
  border: solid blue 2px;
  margin: 2%;
  overflow-wrap: wrap;

  .title {

  }

  .card-content{

  }
`;

export default function Skill({e}) {
  return (
    <StyledCard className='card'>
      <div className='title'>
        <h1>{e.name}</h1>
        <div className='card-content'>
          <div>{e.desc}</div>
          <div>{e.skillLevel}</div>
        </div>
      </div>
    </StyledCard>
  );
};