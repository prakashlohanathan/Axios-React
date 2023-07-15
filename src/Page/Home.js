import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
    <section className="slider container mb-3">
            <Carousel>
              <Carousel.Item className="slide" interval={5000}>
                <img
                  className="d-block w-100"
                  src="https://cdn.vectorstock.com/i/1000x1000/53/84/contact-list-webpage-template-list-contacts-vector-31815384.webp"
                  alt="GUVI Learning Platform"
                  style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                />
              </Carousel.Item>
              <Carousel.Item className="slide" interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://cdn.dribbble.com/users/612987/screenshots/10964626/media/134367e23431ea75cd9440bb8fe25e27.jpg"
                  alt="Learning Place for Beginner in Native Language"
                  style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                />
              </Carousel.Item>
            </Carousel>
          </section>
        </>
  )
}

export default Home