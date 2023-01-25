import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${props => props.theme.mainDarkMode};
  border-top: 4px solid ${props => props.theme.mainBackground};
  padding: 1%;
  margin: 3% 2%;
  width: 40%;
  height: 150px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: flex-start;

  .title {
    color: ${props => props.theme.blueAccent};
    margin: 10px 2px;
  };

  .card-content{
    color: ${props => props.theme.mainText};
    justify-content: space-between;
    height: 100%;
    margin-bottom: 5%;
  };

  div {
    text-align: center;
  };
  
  .fa.fa-star {
    color: #a2acb9;
  };

  .fa.fa-star.checked {
    color: ${props => props.theme.blueAccent}
  };
`;

export default function Skill({theme, e}) {

  function printStars (num) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < num) {
        stars[i] = ("fa fa-star checked");
      } else {
        stars[i] = ("fa fa-star");
      }
    }

    return stars.map((element, idx)=> (
      <span className={element} key={idx} ></span>
    ));
  }

  // function mapSubSkills(descArr) {
  //   return e.desc.map(item => (
  //     <div>
  //       <div>{e.desc[0]}</div>
  //       <div>{printStars(e.skillLevel[0])}</div>
  //     </div> 
  //   ))
  // }

  return (
    <StyledCard className='card flex col' theme={theme}>
      <div className='card-title'>
        <h3 className='title'>{e.name}</h3>
      </div>
      <div className='card-content flex col'>
        <div>{e.desc}</div>
        <div>
          {printStars(e.skillLevel)}
        </div>
      </div>
    </StyledCard>
  );
};