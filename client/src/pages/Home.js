import React from "react";
import BookAppointment from "../components/Book-Appointment";
import About from "../components/About";
import Credentials from "../components/Credentials";
import Price from "../components/Price";
import Policy from "../components/Policy";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <h1 className="title-text">ST Aesthetics</h1>
      </div>
      <About />
      <Credentials />
      <Price />
      <BookAppointment />
      <Policy />
    </>
  );
};

export default Home;
