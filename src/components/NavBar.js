import {Navbar, Container} from "react-bootstrap";
export const NavBar = () => {
    return (
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <span className="navbar-toggler-icon"></span>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#About Us">About Us</Nav.Link> 
                <Nav.Link href="#Contact">pyghku</Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}