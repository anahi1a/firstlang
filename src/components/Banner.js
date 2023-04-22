import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner2 from "../assets/img/banner2.jpg";


export const Banner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
                <h1>Translator Workbench</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in sodales purus. Donec in auctor lacus, ultricies posuere nisi. Vestibulum laoreet mattis lectus eget fringilla. Suspendisse eros diam, rutrum eget urna quis, pharetra faucibus felis. Duis viverra mollis tristique. Nam dignissim massa non augue mollis sodales. Praesent urna turpis, pellentesque a velit ullamcorper, fermentum vestibulum dui. Sed non facilisis ante, ut imperdiet mi.Aenean at suscipit urna, id accumsan dui. Nam dictum urna felis, in venenatis justo hendrerit non. Aliquam convallis gravida eros sed commodo. Duis arcu orci, ultricies id efficitur vel, lobortis id dolor. Pellentesque ultrices rhoncus ligula vel.</p>
                  </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          
                <div>
                  <img src={banner2} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}