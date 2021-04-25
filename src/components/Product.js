import React from "react";
import styled from "styled-components";
import {db} from '../Firebase'

function Product({ title, price, rating, image, id }) {

  const addToCart = () => {
    const cartItem = db.collection('cartItems').doc(id);
    cartItem.get()
      .then((doc) => {
        if (doc.exists) {
          cartItem.update({
            quantity: doc.data().quantity + 1
          })
        }else {
          db.collection("cartItems").doc(id).set({
            name: title,
            image: image,
            price: price,
            quantity: 1
          })
      }
    })
  }
  return (
    <Container>
      <Title>{title}</Title>
      <Price>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Indian_Rupee_symbol.svg/220px-Indian_Rupee_symbol.svg.png"
          alt=""
        />
        {price}
      </Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <img
              src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcC00MjEtamlyODczNy1jaGltLnBuZw.png?s=ITK9JQ81RcGthGczIW_9DLkBj844js0Mz9OCmxvj9O0"
              alt=""
            />
          ))}
      </Rating>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton
          onClick={addToCart}
        >Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  max-height: 400px;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  :hover {
    border: 3px solid #f90;
    box-shadow: 5px 10px 8px 10px #888888;
    margin: 6px;
  }
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
  img {
    height: 16px;
    margin-right: 2px;
  }
`;

const Rating = styled.div`
  margin-top: 3px;
  img {
    height: 20px;
  }
`;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const ActionSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 12px;
`;
const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor:pointer;
`;
