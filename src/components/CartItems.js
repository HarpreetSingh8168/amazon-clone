import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem';

function CartItems({items}) {
    return (
      <Container>
        <Title>Shopping Cart</Title>
        <hr />
        <ItemsContainer>
          {
            items.map((item) => (<CartItem
              id={item.id}
              image={item.product.image}
              title={item.product.name}
              price={item.product.price}
              quantity={item.product.quantity}
            />))
          }
        </ItemsContainer>
      </Container>
    );
}

export default CartItems

const Container = styled.div`
flex:0.8;
padding:20px;
margin-right:18px;
background-color:white;
`;


const Title = styled.h2`
margin-bottom:8px;
`;

const ItemsContainer = styled.div`
`;

