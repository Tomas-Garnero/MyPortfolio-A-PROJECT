import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br />
                My Personal Portfolio
            </SectionTitle>
            <SectionText>
                Full Stack Developer with a background as a Web Designer. Experience working with React, Redux, NodeJS, SQL, Express and agile methodologies. I have full confidence in my ability to produce ideas and lead teams.
            </SectionText>
            <Button onClick={() => window.location = "https://google.com"}>
                Learn More
            </Button>
        </LeftSection>
    </Section>
)


export default Hero;