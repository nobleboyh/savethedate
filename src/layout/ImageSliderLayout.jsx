import React from 'react'
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const ImageSliderLayout = () => {
  const slideImages = import.meta.glob('/src/assets/images/slide/*.{png,jpg,jpeg,gif,svg}', { eager: true, as: 'url' });
  console.log(slideImages);
    return (
        <div className="slide-container">
          <Fade>
           {Object.entries(slideImages).map(([key, url], index) => (
              <div key={index}>
                <div className='w-screen'
                  style={{
                    'backgroundImage': `url(${url})`,
                    'backgroundSize': 'contain',
                    'backgroundPosition': 'center',
                    'backgroundRepeat': 'no-repeat',
                    'paddingTop': '56.25%' // This assumes a 16:9 aspect ratio. Adjust if needed.
                  }}>
                    {console.log(url)}
                </div>
              </div>
            ))}
          </Fade>
        </div>
)
}

export default ImageSliderLayout