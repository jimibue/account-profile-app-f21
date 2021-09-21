import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { AccountContext } from "../providers/AccountProvider";

const Home = () => {
  const { cats, username, dispatch } = useContext(AccountContext);
  return (
    <div>
      <Button
        onClick={() =>
          dispatch({ type: "ADD_CAT", cat: { id: 123, name: "frido" } })
        }
      >
        add cat
      </Button>
    </div>
  );
};

export default Home;
