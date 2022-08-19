import React, { Component } from 'react';
import "./Form.css"

class Form extends Component {
    render() {
        return (
            <>  <div class="form">
                <h4> Plaats een blog bericht </h4>

                <p> Berichtnaam </p>

                <p> Categorie </p>

                <p> Header afbeelding</p>


                <p> Bericht</p>
                <textarea widht="100" height="400"></textarea>
            </div>

                <div class="blog">
                    <div class="item-1"> <h4> Heading </h4> <br/> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                        <div class="item-text">12-06-2019 <span> Tech</span> </div>
                        </div>
                    <div class="item-2"> <h4> Heading </h4> <br/><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                        <div class="item-text"> 12-06-2019 <span> Tech</span></div>
                        </div>
                    <div class="item-3"> <h4> Heading </h4> <br/> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                        <div class="item-text">12-06-2019 <span> Tech</span> </div>
                        </div>
                    <div class="item-4"> <h4> Heading </h4> <br/> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Erspiciatis nobis ullam molestiae quidem, corrupti corporis ipsa rerum laudantium nostrum doloribus ea aliquid?</p>
                        <div class="item-text"> 12-06-2019 <span> Tech</span></div>
                        </div>
                </div> </>


        );
    }
}

export default Form;