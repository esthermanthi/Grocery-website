import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Products extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:["Vegetables","fruits"],
      name:["Onions","Bananas","Kales","Melons","Pineaple","Mangoes","Cucumber","Carrots","Tomatoes"],
      quantity:[90,40,150,130,140,70,140,30,170,],
      price:[140,60,125,240,360,250,600,450,300],
    
    };
  }
 
  render(){
    return(
      <div >
       <h1> GREENS KIOSK</h1>
       <div className="product">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0tS7FPnR37UpBfNwu7jWh7EO6DEJ2W3G2Fg&usqp=CAU"></img>
           <div className="pad">
           <p>Name:{this.state.name[0]}</p>
           <p>Type:{this.state.type[0]}</p>
          <p> Quantity:{this.state.quantity[0]}</p>
          <p> Price:{this.state.price[0]}</p>
          <input type="button" class="button" value="Add To Cart"></input>

          
      
        </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7DfWv5EncXWf0fkLaKX9KQx7ptFfMi6_rqA&usqp=CAU"></img>
          <div className="pad">
          <p>Name:{this.state.name[1]}</p>
           <p>Type:{this.state.type[1]}</p>
          <p> Quantity:{this.state.quantity[1]}</p>
          <p> Price:{this.state.price[1]}</p>
          <input type="button" class="button" value="Add To Cart"></input>

</div>
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQH7Jpk2JjZfk63rtoaUfM8dK38Ca-j-FFPA&usqp=CAU"></img>
          <div className="pad">
          <p>Name:{this.state.name[2]}</p>
          <p>Type:Vegetables{this.state.type[2]}</p>
          <p> Quantity:{this.state.quantity[2]}</p>
          <p> Price:{this.state.price[2]}</p>
          <input type="button" class="button" value="Add To Cart"></input>
         </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDm_GjH4gCz0EehhGpEb9q8fTkw0JnDEhwxg&usqp=CAU"></img>
          <div className="pad">
           <p>Name:{this.state.name[3]}</p>
           <p>Type: Fruits{this.state.type[3]}</p>
           <p> Quantity:{this.state.quantity[3]}</p>
           <p> Price:{this.state.price[3]}</p>
           <input type="button" class="button" value="Add To Cart"></input>

          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6o98-D42fEchy6hUbBh0uyZD9nMpz9JmLSw&usqp=CAU"></img>
          <div className="pad">
            <p>Name:{this.state.name[4]}</p>
            <p>Type: fruits{this.state.type[4]}</p>
            <p> Quantity:{this.state.quantity[4]}</p>
            <p> Price:{this.state.price[4]}</p>
            <input type="button" class="button" value="Add To Cart"></input>

            </div>
         
           
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy1hwJxkUSLaKAcW9dwzMtZwnAMmRsXSQ1Gg&usqp=CAU"></img>
          <div className="pad">
          <p>Name:{this.state.name[6]}</p>
          <p>Type: fruits{this.state.type[6]}</p>
          <p> Quantity:{this.state.quantity[6]}</p>
          <p> Price:{this.state.price[6]}</p>
          <input type="button" class="button" value="Add To Cart"></input>

</div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpb0HYz9t8CopxGd1_XBvEdm1WBCH3Np_mjw&usqp=CAU"></img>
          <div className="pad">
          <p>Name:{this.state.name[7]}</p>
          <p>Type: Vegetables{this.state.type[7]}</p>
          <p> Quantity:{this.state.quantity[7]}</p>
          <p> Price:{this.state.price[7]}</p>
          <input type="button" class="button" value="Add To Cart"></input>

</div>
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZVlO0X7ZvmfiRS4hfoIPQeY8p5Fb7Eh9cFQ&usqp=CAU"></img>
          <div className="pad">
          <p>Name:{this.state.name[8]}</p>
          <p>Type: Vegetables{this.state.type[8]}</p>
          <p> Quantity:{this.state.quantity[8]}</p>
          <p> Price:{this.state.price[8]}</p>
          <input type="button" class="button" value="Add To Cart"></input>

</div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhXZtc-HDtHv4a7AaFR0gl-NhpeXo9XJF6A&usqp=CAU"></img>
         
          <div className="pad">
            <p>Name:{this.state.name[9]}</p>
          <p>Type: Vegetables{this.state.type[9]}</p>
          <p> Quantity:{this.state.quantity[9]}</p>
          <p> Price:{this.state.price[9]}</p>

          <input type="button" class="button" value="Add To Cart"></input>
          </div>
</div>
</div>
    )}
}
ReactDOM.render(
  <Products/>,
  document.getElementById('root')
);