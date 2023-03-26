import { Acomplishments, Hero, MyProjects, Technologies, TimeLine } from "../components";
import BgAnimation from "../components/BackgrooundAnimation/BackgrooundAnimation";
import Layout from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
    return (
        <Layout>
            <Section grid>
                <Hero />
                <BgAnimation />
            </Section>
            <MyProjects />
            <Technologies />
            <TimeLine />
            <Acomplishments />
        </Layout>
    )
}

export default Home;