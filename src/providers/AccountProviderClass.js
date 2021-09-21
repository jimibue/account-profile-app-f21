import React from "react";

// setup the intial context
export const AccountContext = React.createContext();

// consumer that ca be inkected into other components
export const AccountConsumer = AccountContext.Consumer;

// Create a Provider
class AccountProvider extends React.Component {
  state = {
    username: "foobarbazbamMan",
    dateJoined: "12/28/21",
    membershipLevel: "Silver",
    updateAccount: (account) => this.updateAccount(account),
    // this doesn't work
    // updateAccount: this.updateAccount,
  };

  updateAccount = (account) => {
    console.log("update called:", account);
    this.setState({
      ...account,
      // above is a short hand for this
      // username: account.username,
      // membershipLevel: account.membershipLevel,
    });
  };

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}
export default AccountProvider;
