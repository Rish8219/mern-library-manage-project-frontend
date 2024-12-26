import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AboutUsBanner from './AboutUsBanner'
import './aboutus.css'
import { about_data } from './aboutusData'

const AboutUsPage = () => {
  return (
    <Container>
      <AboutUsBanner></AboutUsBanner>
      <h1 className='h1 text-center mx-auto' id='about-heading'>
        About Us
      </h1>
      <Row className='mt-5 aboutus-bottom-section'>
        {about_data.map((items) => {
          const { id, title, description } = items
          return (
            <Col lg={10} key={id}>
              <h1>{title}</h1>
              
              <p><br />{description}</p>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AboutUsPage
