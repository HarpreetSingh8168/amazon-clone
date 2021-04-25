import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}) {
    return (
        <Container>
            <CartItems items={ cartItems}/>
            <CartTotal items={cartItems}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
display:flex;
padding:20px 18px 0 18px;
align-items:flex-start;
`;