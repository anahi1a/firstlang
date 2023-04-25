import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


export const Login = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);


  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  
 const handleSubmit = (e) =>{
    e.preventDefault();
    //fill code accordingly
 }

  return (
    <section className="login" id="Login">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="password" value={formDetails.password} placeholder="Password" onChange={(e) => onFormUpdate('password', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <button type="submit"><span>Login</span></button>
                    </Col>
                 
                  </Row>
                </form>
              </div>
        
          </Col>
        </Row>
      </Container>
    </section>
  )
}