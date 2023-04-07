import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { 
    CompanyContainer, 
    FooterWrapper, 
    LinkColumn, 
    LinkItem, 
    LinkList, 
    LinkTitle, 
    Slogan, 
    SocialContainer, 
    SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+54 351 4595592">+54 351 4595592</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:tomygarnero9429@gmail.com">tomygarnero9429@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialContainer>
                <CompanyContainer>
                    <Slogan>Innovating one project at a time</Slogan>
                </CompanyContainer>
                <SocialIconsContainer>
                        <SocialIcons href="https://github.com/Tomas-Garnero">
                            <AiFillGithub size="3rem" />
                        </SocialIcons>
                        <SocialIcons href="https://www.linkedin.com/in/tomas-garnero/">
                            <AiFillLinkedin size="3rem" />
                        </SocialIcons>
                        <SocialIcons href="https://www.instagram.com/tomygarnero/">
                            <AiFillInstagram size="3rem" />
                        </SocialIcons>
                </SocialIconsContainer>
            </SocialContainer>
        </FooterWrapper>
    );
};

export default Footer;
