import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './HomePage.css'

const slideImages = [
  'https://www.york.ac.uk/media/study/courses/postgraduate/psychology/newpgcoursepages/msccognitiveneuroscience/cognitive%20neuroscience%20banner.jpg',
  'https://www.oxy.edu/sites/default/files/styles/banner_image/public/landing-page/banner-images/neuroscience_main_1440x800.jpg?itok=2w8RQm2a',
  'https://lpsonline.sas.upenn.edu/sites/default/files/2019-04/lpso-subject-area-neuroscience.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>
                <a href="https://www.jneurosci.org/">Journal of Neuroscience</a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>
              <a href="https://neurosciencenews.com/">Neuroscience News</a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>
              <a href="https://www.sfn.org/">Society for Neuroscience</a>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;

// https://www.npmjs.com/package/react-slideshow-image