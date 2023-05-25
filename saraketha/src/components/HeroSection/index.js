import React, { useState} from 'react'
import Video from '../../videos/pexels-pressmaster-3195351-3840x2160-25fps.mp4'; 
import { Button } from '../ButtonElements'
import { HeroContainer,
         HeroBg,
         VideoBg,
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight
          } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>සාර-කෙත</HeroH1>
          <HeroP>
            IoT-Enabled Smart Solution for Rice Disease Detection, Yield
            Prediction, and Remediation
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="scope"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
};

export default HeroSection;
