import styled from 'styled-components';
import AboutSection from '../sections/AboutSection';
import ProjectSection from '../sections/ProjectSection';
import SkillSection from '../sections/SkillSection';

const StyledContentBody = styled.div`
	width: 100%;
`;

export default function Home ({themes}) {
	return <StyledContentBody>
		<AboutSection themes={themes}></AboutSection>
		<ProjectSection></ProjectSection>
		<SkillSection></SkillSection>
	</StyledContentBody>
};