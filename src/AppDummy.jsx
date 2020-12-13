import React, {useState, usegetProductData } from 'react'
import { getData } from "../modules/productData";

const AppDummy = (props) => {
  let [productData, setProductData] = useState([])
  const getProductData = async () => {
    let result = await getData();
    setProductData(result.data.products)
  }
  usegetProductData(() => {
    getProductData()
    
   }, []) 
  let dataIndex = productData.map(item => {
    return (
      <div  key={item.id}
        id={`product-${item.id}`}
        data-id={item.id}
        data-price={item.price}
      >
        {`${item.name} ${item.description} ${item.price}`}
        <button onClick={this.addToOrder.bind(this)}>
          Add to order
        </button>
      </div>  
    )
  })
  return (
    <>
      {dataIndex}
    </>
  )
}

export default AppDummy



// import React, { Component } from "react";
// import axios from "axios";

// class DisplayProductData extends Component {
//   state = {
//     productData: [],
//     message: {},
//     orderDetails: {},
//     showOrder: false,
//   };

//   componentDidMount() {
//     this.getProductData();
//   }

//   async getProductData() {
//     let result = await getData();
//     this.setState({ productData: result.data.products });
//   }

//   async addToOrder(event) {
//     let id = event.target.parentElement.dataset.id;
//     let result;
//     if (this.state.orderDetails.hasOwnProperty("id")) {
//       result = await axios.put(
//         `http://localhost:3000/api/orders/${this.state.orderDetails.id}`,
//         { product_id: id }
//       );
//     } else {
//       result = await axios.post("http://localhost:3000/api/orders", {
//         product_id: id,
//       });
//     }
//     this.setState({
//       message: { id: id, message: result.data.message },
//       orderDetails: result.data.order_details.order,
//     });
//   }

//   render() {
//     let dataIndex, orderDetailsDisplay;
//     if (
//       Array.isArray(this.state.productData) &&
//       this.state.productData.length
//     ) {
//       dataIndex = (
//         < id="index">
//           {this.state.productData.map((item) => {
//             return (
              // <
              //   key={item.id}
              //   id={`product-${item.id}`}
              //   data-id={item.id}
              //   data-price={item.price}
              // >
              //   {`${item.name} ${item.description} ${item.price}`}
              //   <button onClick={this.addToOrder.bind(this)}>
              //     Add to order
              //   </button>
//                 {parseInt(this.state.message.id) === item.id && (
//                   <p className="message">{this.state.message.message}</p>
//                 )}
//               </>
//             );
//           })}
//         </>
//       );
//     }

//     if (this.state.orderDetails.hasOwnProperty("products")) {
//       orderDetailsDisplay = this.state.orderDetails.products.map((item) => {
//         return <li key={item.name}>{item.name}</li>;
//       });
//     } else {
//       orderDetailsDisplay = "Nothing to see";
//     }

//     return (
//       <>
//         {this.state.orderDetails.hasOwnProperty("products") && (
//           <button
//             onClick={() => this.setState({ showOrder: !this.state.showOrder })}
//           >
//             View order
//           </button>
//         )}
//         {this.state.showOrder && (
//           <ul id="order-details">{orderDetailsDisplay}</ul>
//         )}
//         {dataIndex}
//       </>
//     );
//   }
// }
// export default DisplayProductData;
