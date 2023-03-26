import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, A } from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link to="/">
                <A>
                    <DiCssdeck size="3.5rem" style={{marginRight: "0.4rem"}}/> <Span>Portfolio</Span>
                </A>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link to="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link to="#projects">
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link to="#about">
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
)


export default Header;
