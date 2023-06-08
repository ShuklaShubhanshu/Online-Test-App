import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import {Form}from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const HomeView = ({setSkill,skill}) => {
  const options=[
    {value:1,label:"Easy"},
    {value:2,label:"Medium"},
    {value:3,label:"Hard"},
  ]
  let navigate=useNavigate()
  const routeChange = () =>{ 
       navigate("/Online_Test",{ state: {skill} });
  }
  let handleChangeSkill=event=>{
    setSkill(event.target.value)
  }
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
                Select the Skill
              </p>

              <Form.Select  aria-label="Default select example" onChange={handleChangeSkill} >
              <option key = 'blankChoice' hidden value>Select Skill </option>
              {options.map((option)=>{
                          return(<option key={option.value}>{option.label}</option> 
                            )
                        })
                        }
              </Form.Select>


              <MDBBtn className="mb-4" size="lg" onClick={routeChange}>
                Start
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default HomeView;
