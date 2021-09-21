import React, { useState, useReducer } from "react";

//Context
export const AccountContext = React.createContext();

const AccountProvider = (props) => {
  const [state, setState] = useState({
    username: "fooMan",
    dateJoined: "12/28/21",
    membershipLevel: "Silver",
    updateAccount: (account) => setState({ ...state, ...account }),
  });

  const catsReducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
      case "ADD_CAT":
        return [...state, action.cat];
      case "DELETE_CAT":
        return state.filter((c) => c.id != action.id);
      case "SORT_CATS_BY_STARS":
        return [...state].sort((a, b) => b.stars - a.stars);
      default:
        console.log("here");
        return state;
    }
  };
  // bonus
  const [cats, dispatch] = useReducer(catsReducer, [
    { id: 1, name: "fuzzy", stars: -2 },
    { id: 2, name: "sally", stars: 3 },
    { id: 3, name: "razzle", stars: 1 },
    { id: 4, name: "dazzle", stars: 2 },
  ]);

  return (
    <AccountContext.Provider value={{ ...state, cats, dispatch }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
