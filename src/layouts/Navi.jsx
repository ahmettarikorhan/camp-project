import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useSelector } from 'react-redux';

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthhenticated, setIsAuthhenticated] = useState(true);
  const history = useHistory();
  function handleSignOut() {
    setIsAuthhenticated(false);
    history.push("/")
  }
  function handleSignIn() {
    setIsAuthhenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/"/>
          <Menu.Item name="messages" as={NavLink} to="/" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthhenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
