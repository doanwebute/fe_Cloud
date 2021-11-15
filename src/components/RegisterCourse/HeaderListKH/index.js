import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate} from 'react-router-dom';
const HeaderListKH = () => {
  const history = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      style={{ borderBlock: "none" }}
    >
      <Container>
        <span
            onClick={() => {
              history('/');
          }}
          style={{
            marginLeft: 0,
            marginTop: 10,
            display: "block",
            textDecoration: "none",
            color: "#98a0a5",
            cursor: "pointer",
            width: 150,
            height: 60,
            padding: 10,
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: "20px" }} />
          Quay lại
        </span>
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderListKH;
