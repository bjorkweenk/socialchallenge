import React, { Component } from 'react';
import "./Bigscreen.css"
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Form from '../../Form/Form'

class Bigscreen extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <Form />
            <Footer/>
            </>
        );
    }
}

export default Bigscreen;