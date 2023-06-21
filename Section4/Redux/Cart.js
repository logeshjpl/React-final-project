import React from "react";
import { useCart } from "react-use-cart";
import './Cart.css';

const Cart = () =>{
    const {
        isEmpty,
        totalUniqueItems,
        cartTotal,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    if (isEmpty) return <h3 className="car1">Book your Appointment</h3>;
 return(
        <div className="container-md-4 car">
            <h1>Doctors ({totalUniqueItems}) Patients:({totalItems})</h1>
            <table>
            {items.map((item,index) =>{
                return(
          <tr key={index}>
            <td><img src={item.img} style={{height:'6rem'}}/> </td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td> Patients:{item.quantity}</td>
            <td>
            <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
             <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
             <button onClick={()=> removeItem(item.id)}>Remove item</button>
            </td>
            </tr>

            )} )} 
            </table>
            <div> <h1 className="f">Total Patients:{totalItems}</h1></div>
            <div className="f"> 
                <button onClick={()=> emptyCart()}>Clear cart</button>
            </div>
            </div>
    )
}; 
 
export default Cart;