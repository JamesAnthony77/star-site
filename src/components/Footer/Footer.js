import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer,
        FooterSubscription,
        FooterSubHeading,
        FooterSubText,
        Form,
        FormInput,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinksItems,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink,
        SocialIcon
    } from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our spacetime membership and slingshot your way to warped gravity
                </FooterSubHeading>
                <FooterSubText>You can leave this galaxy at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                   <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='./sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destination</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>

                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Ad Astra</FooterLink>
                    </FooterLinksItems> 

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinksItems> 
                </FooterLinksWrapper>
            </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon/>
                            ANDROMEDA
                        </SocialLogo>
                        <WebsiteRights>ANDROMEDA © 2021</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink> 

                                <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
