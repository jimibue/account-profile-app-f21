import React, { useContext } from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { AccountContext } from "../providers/AccountProvider";
import Account from "./Account";
import AccountForm from "./AccountForm";

const AccountProfile = () => {
  const { cats, dispatch } = useContext(AccountContext);
  return (
    <>
      <h1>Cats</h1>
      <Button onClick={() => dispatch({ type: "SORT_CATS_BY_STARS" })}>
        Sort
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: "ADD_CAT",
            cat: { id: Math.random(), name: "izzy", stars: 10 },
          });
          dispatch({ type: "SORT_CATS_BY_STARS" });
        }}
      >
        Add
      </Button>
      {cats.map((c) => {
        return (
          <Card key={c.id}>
            <Image src="https://robohash.org?set=set4" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{c.name}</Card.Header>
              <Button
                onClick={() => dispatch({ type: "DELETE_CAT", id: c.id })}
              >
                delete
              </Button>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="star" />
                {c.stars}
              </a>
            </Card.Content>
          </Card>
        );
      })}
      <Account />
      <AccountForm />
    </>
  );
};

export default AccountProfile;
