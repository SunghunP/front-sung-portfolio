import styled from 'styled-components';
import Project from '../Project';
import mapDataToComponents from '../../helpers/mapDataToComponents';

const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 100%;
    margin-bottom: 10%;
    justify-content: center;
    align-items: center;
  };

  h2 {
    color: ${props => props.theme.mainAccent};
  }
`;

export default function ProjectSection({theme, projectList}) {
  return <StyledDiv theme={theme} className='flex col' id='projects-section'>
    <h2>PROJECTS</h2>
    <div className='wrapper flex col'>
      {mapDataToComponents(projectList, Project, theme)}
    </div>
  </StyledDiv>
};
