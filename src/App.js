
 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
 
 
 
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

      veg1: "Spinach",
      veg1Img:
      "https://www.alphafoodie.com/wp-content/uploads/2020/03/Spinach-Fatayer-1-of-6-683x1024.jpeg",
      spinachQuantity: 100,
 
      veg2: "Onion",
      veg2Img:
        "https://www.foodqualityandsafety.com/wp-content/uploads/2018/08/FQU_eUpdate_0925_onions.jpg",
      onionQuantity: 300,

      veg3: "tomatoes",
      veg3Img:
        "https://cdn.standardmedia.co.ke/images/friday/qpgzxmpu6q2ubulaj5t5e5973bfd4a1f.jpg",
      tomatoQuantity: 500,

      veg4: "carrots",
      veg4Img:
        "" ,
        carrotsQuantity: 600,

      type2: "Fruits",

      spinachImg: "data:image/jpeg;base64,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",

      fruit1: " banana",
      fruit1Img:
        "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
      bananaQuantity: 200,

      fruit2: " Mango",
      fruit2Img:
        "https://scx2.b-cdn.net/gfx/news/hires/2015/innovativete.jpg",
      mangoQuantity: 500,

      appleImg:
        "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",

      appleImgQuantity: 300,
      appleImgPrice: 100,

      bananaImg:
      "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",
      bananaQuantity:300,

      bunchImg:
        "https://thumbor.forbes.com/thumbor/300x246/https://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple-300x246.jpg?width=960",

      bunch2Img:
        "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg",

       
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div class="nav">
          <ul>
            
          </ul>
        </div>
        <h1>GREEN KIOSK PRODUCTS</h1>
        <h> Lets go healthy{this.state.type1} </h>

        <section className="products">
          <div className="one">
            <div className="product-image">
              <img className="photo" src={this.state.spinachImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Spinach</h5>
              <p> Kes {this.state.spinachImgPrice}</p>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="two">
            <div className="product-image">
              <img className="photo" src={this.state.tomatoImage} alt="" />
            </div>
            <div className="product-info">
              <h5> tomatoes</h5>
              <h6> kes 500</h6>
              <p> Quantity {this.state.tomatoQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="three">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> onions</h5>
              <h6> kes 500</h6>
              <p> Quantity {this.state.Quantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="four" >
            <div className="product-image">
              <img className="photo" src={this.state.fruit1Img} alt="" />
            </div>
            <div className="product-info" >
              <h5>banana</h5>
              <h6>kes 100</h6>
              <p>Quantity{this.state.Quantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()" >

              </button>
            </div>
          </div>

          <div className="five">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
            <div className="product-info">
              <h5> apple</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
          

 </section>
      </div>
    );
  }
}

export default App;