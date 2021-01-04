import React from 'react'
import styled from 'styled-components'

const FooterTitles = styled.p`
    color: white;
    font-size: ${props => props.theme["footerTitleSize"]};
    letter-spacing: 1.8px;
    margin-bottom:30px;
`

const FooterText = styled.p`
    color:white;
    opacity: 0.8;
    font-size: ${props => props.theme["footerTextSize"]};
`

const Copyright = styled.p`
color: white;
font-size: ${props => props.theme["footerTitleSize"]};
letter-spacing: 1px;
`

const PaymentOption = styled.i`
    color: darkgrey;
    font-size: 25px;
    padding: 0 8px;
`

const SocialMedia = styled.i`
    color: white;
    font-size: 22px;
    padding: 0 5px;
    margin-top: -3px;
    margin-left: 15px;
`

const StyledWrapper = styled.div`
    background : black;

    .footer__logo{
        width:100%;
        height:70%;
        object-fit:contain;
    }

    hr{
        background: grey;
        opacity:0.2;
    }
`

const footer = () => {
    return (
        <StyledWrapper>
            <div className="container">
                <div className="row pt-4">
                    <div className="col-lg-2 col-12">
                        <img className="img-fluid" src="https://cdn.item-m6.com/media/wysiwyg/ITEM_m6/Die_Marke/Technologie/kompression-medi-logo.png" alt="" />
                    </div>
                    <div className="col-lg-2 col-6">
                        <FooterTitles>COMPANY INFO</FooterTitles>
                        <FooterText>About Item M6</FooterText>
                        <FooterText>Medi USA</FooterText>
                        <FooterText>Press</FooterText>
                    </div>
                    <div className="col-lg-3 col-6">
                        <FooterTitles>SUPPORT + SERVICE</FooterTitles>
                        <FooterText>Contact Us</FooterText>
                        <FooterText>Returns + Reorders</FooterText>
                    </div>
                    <div className="col-lg-2 col-6">
                        <FooterTitles>SHOP ITEM M6</FooterTitles>
                        <FooterText>Shop All Products</FooterText>
                        <FooterText>Size Charts</FooterText>
                    </div>
                    <div className="col-lg-3 col-6">
                        <FooterTitles>NEED HELP?</FooterTitles>
                        <FooterText>Live Chat</FooterText>
                        <FooterText>Call: 1 (866) 665-6606</FooterText>
                        <FooterText>Email: indo@item6@usa.com</FooterText>
                    </div>
                </div>
                <hr />
                <div className="row d-flex flex-wrap-reverse">
                    <div className="col pt-1">
                        <Copyright> C 2020 ITEM m6. Powered by Shopify</Copyright>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <PaymentOption><i class="fab fa-cc-visa"></i></PaymentOption>
                        <PaymentOption><i class="fab fa-cc-mastercard"></i></PaymentOption>
                        <PaymentOption><i class="fab fa-cc-amex"></i></PaymentOption>
                        <PaymentOption><i class="fab fa-cc-paypal"></i></PaymentOption>
                        <PaymentOption><i class="fab fa-cc-discover"></i></PaymentOption>
                        <PaymentOption><i class="fab fa-apple-pay"></i></PaymentOption>
                    </div>
                    <div className="col d-flex pt-2 justify-content-end">
                        <FooterText>Follow Us:</FooterText>
                        <SocialMedia><i class="fab fa-facebook-f"></i></SocialMedia>
                        <SocialMedia><i class="fab fa-twitter"></i></SocialMedia>
                        <SocialMedia><i class="fab fa-instagram"></i></SocialMedia>
                    </div>
                </div>
            </div><i class="fab fa-instagram"></i>
        </StyledWrapper>
    )
}

export default footer
