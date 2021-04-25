import React from "react";
import styled from "styled-components";
import { db } from "../Firebase";

function CartItem({ image, title, price, quantity, id }) {
  let options = [];
  for (let i = 1; i < Math.max(quantity + 1, 20); i++) {
    options.push(<option value={i}>Qty: {i}</option>);
  }

  const deleteItem = () => {
    db.collection("cartItems").doc(id).delete();
  }
  const changeQuantity = (newQuantity) => {
    db.collection("cartItems")
      .doc(id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };
  return (
    <Container>
      <Image src={image} />
      <CartItemInfo>
        <CartInfoTop>{title}</CartInfoTop>
        <CartInfoBottom>
          <CartItemQuantity>
            <select
              value={quantity}
              onChange={(e) => changeQuantity(e.target.value)}
            >
              {options}
            </select>
          </CartItemQuantity>
          <CartItemDelete
            onClick={deleteItem}
          >Delete
          </CartItemDelete>
        </CartInfoBottom>
      </CartItemInfo>
      <CartItemPrice>{price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const Image = styled.img`
  height: 180px;
  width: 180px;
  margin-right: 16px;
  object-fit: contain;
  flex-shrink: 0;
  flex-grow: 0;
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartInfoTop = styled.h2`
  color: #007185;
  font-size: 18px;
`;

const CartInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;

const CartItemQuantity = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  }
  select:focus {
    outline: none;
  }
`;

const CartItemDelete = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;

const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
