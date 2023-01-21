import styled from 'styled-components';
import AboutSection from '../components/sections/AboutSection';
import ProjectSection from '../components/sections/ProjectSection';
import SkillSection from '../components/sections/SkillSection';

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