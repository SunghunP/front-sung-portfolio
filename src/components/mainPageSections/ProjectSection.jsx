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
`;

export default function ProjectSection({theme, projectList}) {
  return <StyledDiv theme={theme} className='flex col'>
    <h1>PROJECTS</h1>
    <div className='wrapper flex col'>
      {mapDataToComponents(projectList, Project, theme)}
    </div>
  </StyledDiv>
};
