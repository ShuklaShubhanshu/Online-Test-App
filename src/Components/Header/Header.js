import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import { LoggedInUser } from '../Login/LoggedInUser';
import { Link } from 'react-router-dom';
export default function Header() {
  const LoggedInUserDetail=LoggedInUser()
  return (
    <>
      <MDBNavbar fixed='top' light bgColor='light' className="mb-14">
        <MDBContainer fluid>
          {LoggedInUser()?
          <>
          <Link to="/Registration" onClick={()=>window.localStorage.removeItem("user_login")} >Logout</Link>
          <MDBNavbarBrand >{LoggedInUserDetail[0].name}</MDBNavbarBrand>
          </>
          :
          <MDBNavbarBrand href='#'>Online Quiz</MDBNavbarBrand>}
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}