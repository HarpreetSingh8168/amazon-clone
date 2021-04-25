import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

function Header({cartItems,user,signOut}) {

  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    })
    return count;
  }
  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" alt="" />
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>
      <HeaderNavItem>
        <HeaderOption onClick={signOut}>
          <OptionLineOne>Hello,{user.name}</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOptionCart>
          <Link to="/cart">
            <CartCount>{getCount()}</CartCount>
            <ShoppingContainer>
              <ShoppingCartIcon />
            </ShoppingContainer>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItem>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 95px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div`
  color: #c5c3c3;
`;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  font-size: 19px;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeaderNavItem = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  padding: 10px 9px;
  cursor:pointer;
`;

const HeaderOptionCart = styled.div`
display:flex;
padding-top:8px;
  a {
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;

const ShoppingContainer = styled.div`
margin-top:-7px;
`;
const CartCount = styled.div`
  padding-left: 4px;
  padding-right:3px;
  color: #f90;
  font-weight:700;
`;
