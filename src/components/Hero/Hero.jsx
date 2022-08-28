import React from 'react';
import NavBar from '../Navbar/Navbar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

function Hero() {
	return (
		<HeroContainer>
			<NavBar />
			<HeroContent>
				<HeroItems>
					<HeroH1>Greatest Pizza Ever</HeroH1>
					<HeroP>Ready in 60 seconds</HeroP>
					<HeroBtn>Place Order</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
