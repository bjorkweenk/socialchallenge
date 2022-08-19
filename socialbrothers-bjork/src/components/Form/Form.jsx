import React, { Component } from 'react';
import "./Form.css"

class Form extends Component {
    render() {
        return (
            <>
                <div className="background">

                    <form className="form">
                        <h3> Plaats een blog bericht</h3>
                        <div className="berichtnaam" controlId="email">
                            <label className="txt">Berichtnaam</label>
                            <br></br>
                            <input
                                type="text"
                                name="Berichtnaam"
                                placeholder="  Geen titel"
                            />
                        </div>

                        <div className="Categorie">
                            <label className="text1">Categorie</label>
                            <br></br>
                            <select
                                type="selector"
                                name="categorie"
                                placeholder="Geen categorie"
                            >
                                <option value="" disabled selected> Geen categorie </option>
                                <option> Strategie & Advies  </option>
                                <option> Digital Marketing  </option>
                                <option> Design </option>
                                <option> Development </option> </select>
                        </div>


                        <div className="File">
                            <p className="header"> Header afbeelding</p>
                            <br></br>
                            <input type="file" class="input-field">

                            </input>
                        </div>

                        <div className="Bericht">
                            <p> Bericht </p>
                            <textarea className="text1"></textarea>
                            <br></br>

                            <button className="btn1" type="submit">
                                Bericht aanmaken
                            </button>
                        </div>





                    </form>


                    <div class="blog">
                        <div class="item-1">
                            <div class="item-text1"><p class="p">12-06-2019 <span> Tech</span></p> </div>
                            <div class="item-content">
                                <h4> Heading </h4> <br /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                            </div>
                        </div>


                        <div class="item-2">
                            <div class="item-text2"><p class="p">12-06-2019 <span> Tech</span> </p> </div>
                         <div class="item-content">  <h4> Heading </h4> <br /><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                         </div> 
                        </div>


                        <div class="item-3">
                            <div class="item-text3"> <p class="p">12-06-2019 <span> Tech</span> </p></div>
                          <div class="item-content">  <h4> Heading </h4> <br /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                          </div>
                        </div>

                        <div class="item-4">
                            <div class="item-text4"> <p class="p">12-06-2019 <span> Tech</span> </p></div>
                            <div class="item-content">
                                <h4> Heading </h4> <br /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                            </div>
                        </div> 

                          <button className="btn2" type="submit">
                                Meer laden 
                            </button>  
                    </div>
                
                  
                </div>

                
            </>
        );
    };
};

export default Form;