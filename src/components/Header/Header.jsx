import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiAncientGateFill } from "react-icons/ri";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, A } from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link to="/">
                <A>
                    <RiAncientGateFill size="3.2rem" style={{marginRight: "1.8rem"}}/> <Span>Portfolio</Span>
                </A>
            </Link>
        </Div1>
        <Div2>
            <li>
                <A href="#projects">
                    <NavLink>Projects</NavLink>
                </A>
            </li>
            <li>
                <A href="#tech">
                    <NavLink>Technologies</NavLink>
                </A>
            </li>
            <li>
                <A href="#about">
                    <NavLink>About</NavLink>
                </A>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/Tomas-Garnero">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/tomas-garnero/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/tomygarnero/">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
)


export default Header;
