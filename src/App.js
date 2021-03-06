import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {auth, db} from './Firebase'
import Login from './components/Login';
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setCartItems] = useState([]);
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product:doc.data()
      }))
      setCartItems(tempItems);
    })
  }
  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("user");
    })
  }
  useEffect(() => {
    getCartItems();
  },[])
  return (
    <Router>
      {!user ? (
        <Login setUser={setUser}/>
      ) : (
        <Container>
            <Header cartItems={cartItems} user={user} signOut={signOut}/>
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`

`;