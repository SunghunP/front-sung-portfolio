import styled from 'styled-components';
import AboutSection from '../components/mainPageSections/AboutSection';
import ProjectSection from '../components/mainPageSections/ProjectSection';
import SkillSection from '../components/mainPageSections/SkillSection';
import Resume from '../components/Resume';

const StyledContentBody = styled.div`
	width: 100%;
	border-color: transparent;
	box-shadow: 0 0 10px 2px ${props => props.theme.mainBackground};
`;

export default function Home ({theme}) {
	return <StyledContentBody theme={theme}>
		<AboutSection theme={theme}></AboutSection>
		<Resume theme={theme}></Resume>
		<SkillSection theme={theme}></SkillSection>
		<ProjectSection theme={theme}></ProjectSection>
	</StyledContentBody>
};