import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";

function LoginView({  
  handleChange,
  handleSubmit,
  formErrors,
  isSubmit,}) {
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign in
              </p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBInput
                  label="Your Email"
                  id="form2"
                  name="email"
                  onChange={handleChange}
                  type="email"
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBInput
                  label="Password"
                  id="form3"
                  name="password"
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <p>{formErrors.password}</p>
              <MDBBtn className="mb-4" size="lg" onClick={handleSubmit} >
                Login
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" 
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginView;
