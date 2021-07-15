import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './HomePage.css'

const slideImages = [
  'https://www.york.ac.uk/media/study/courses/postgraduate/psychology/newpgcoursepages/msccognitiveneuroscience/cognitive%20neuroscience%20banner.jpg',
  'https://media-exp3.licdn.com/dms/image/C561BAQEykMZPb5BbaQ/company-background_10000/0/1559024542521?e=2159024400&v=beta&t=0uLRL4gMe9YJNzkQgWu3LnlF6fO-W_eBRNBhAIWjKuA',
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