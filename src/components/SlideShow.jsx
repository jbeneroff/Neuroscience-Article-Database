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
                <a href="https://www.jneurosci.org/content/early/2021/06/18/JNEUROSCI.3157-20.2021?utm_source=JN&utm_medium=Webpage&utm_campaign=Most_Discussed">Human Hippocampal Neurons Track Moments in a Sequence of Events</a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>
              <a href="https://www.jneurosci.org/content/early/2021/06/03/JNEUROSCI.0391-21.2021?utm_source=JN&utm_medium=Webpage&utm_campaign=Most_Discussed">Visual Recognition is Heralded by Shifts in Local Field Potential Oscillations and Inhibitory Networks in Primary Visual Cortex</a>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>
              <a href="https://www.jneurosci.org/content/early/2021/06/15/JNEUROSCI.0278-21.2021?utm_source=JN&utm_medium=Webpage&utm_campaign=Most_Discussed">Distinct Neurophysiological Correlates of the fMRI BOLD Signal in the Hippocampus and Neocortex</a>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;

// https://www.npmjs.com/package/react-slideshow-image