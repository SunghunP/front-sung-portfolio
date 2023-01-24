import styled from 'styled-components';

const StyledCard = styled.div`
  color: ${props => props.theme.mainBackground};
  background: linear-gradient(to left, #12D8FA  75%, #199FC5  120%);
  padding: 1%;
  margin: 3% 2%;
  width: 40%;
  height: 150px;
  border-radius: 20px;
  border: 1px solid #11acd1;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: flex-start;

  .title {
    color: ${props => props.theme.mainBackground};
  }

  .card-content{
    color: ${props => props.theme.mainDarkMode};
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