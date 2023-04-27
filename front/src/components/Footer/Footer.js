import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src="./assets/icon3.png" />
							SMARTcity
						</FooterLogo>
						<FooterAddress>
						58000, Heroes of the Maidan Street, 186B, Chernivtsi, Chernivtsi region, 58000
						</FooterAddress>
						

						<Row align="left" margin="auto  0 0 0" gap="0.5rem">
							{footerSocialData.map((social, index) => (
								
								<FooterSocialIcon
								
									key={index}
									href="https://www.instagram.com/accounts/login/?next=/smartcityexpo/"
						
									
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
									
								</FooterSocialIcon>
								
							))}
							@smartcity2022
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>SMARTCITY © 2022</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
