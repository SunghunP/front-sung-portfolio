import styled from 'styled-components';

const StyledCard = styled.div`
  background: #1c1c1c;
  border-top: 4px solid ${props => props.theme.mainBackground};
  padding: 1%;
  margin: 3% 2%;
  width: 40%;
  height: 150px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: flex-start;

  .title {
    color: ${props => props.theme.mainBackground};;
  }

  .card-content{
    color: ${props => props.theme.mainText};
    justify-content: space-between;
    height: 100%;
    margin-bottom: 5%;
  }

  div {
    text-align: center;
  }
`;

export default function Skill({theme, e}) {
  return (
    <StyledCard className='card flex col' theme={theme}>
      <div className='card-title'>
        <h3 className='title'>{e.name}</h3>
      </div>
      <div className='card-content flex col'>
        <div>{e.desc}</div>
        <div>{e.skillLevel}</div>
      </div>
    </StyledCard>
  );
};