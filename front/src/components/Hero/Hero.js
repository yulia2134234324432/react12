import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroPicture, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroPicture src="./assets/picture1.png" />
			<Container>
				<MainHeading>SmartCity - ефективна інтеграція цифрових систем</MainHeading>
				<HeroText>
					Наша ідея полягає в зборі інформаціїї в режимі реального часу та в сервісі вищого гатунку - тобто поліпшити рівень життя населення
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Детальніше</Button>
					</Link>
				
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
