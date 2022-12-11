import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Services from "./Services";
import Form from "../components/Form";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="">
      <Topbar />
      <Navbar />
      <Hero />
      <Card />
      <Services />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
