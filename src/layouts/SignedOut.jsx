import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button onClick={signIn} inverted color="blue">
            Giriş Yap
          </Button>
          <Button.Or text="" />
          <Button inverted color ="green">Kayıt Ol</Button>
        </Button.Group>
      </Menu.Item>
    </div>
  );
}
