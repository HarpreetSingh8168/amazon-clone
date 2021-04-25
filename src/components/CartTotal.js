import React from "react";
import styled from "styled-components";

function CartTotal({ items }) {
  
  let count = 0;
  let totalPrice = 0;
  const calAmount = () => {
    items.forEach((item) => {
      count += item.product.quantity;
      totalPrice += ((item.product.quantity) * (item.product.price));
    })
  }
  calAmount();
  return (
    <Container>
      <CartTotalTitle>Subtotal ({count} item):{totalPrice}</CartTotalTitle>
      <CheckOutButton>Proceed To Checkout</CheckOutButton>
    </Container>
  )
}

export default CartTotal;

const Container = styled.div`
  flex: 0.3;
  padding: 20px;
  background-color: white;
`;

const CartTotalTitle = styled.h2`
margin-bottom:16px;
`;

const CheckOutButton = styled.button`
background-color:#f0c14b;
width:100%;
padding:4px 8px;
border: 2px solid #a88734;
border-radius:4px;
cursor:pointer;
font-size:16px;
:hover{
  background:#ddb347;
}
`;