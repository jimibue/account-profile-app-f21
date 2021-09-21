import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

const Account = () => {
  const { username, dateJoined, membershipLevel } = useContext(AccountContext);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>Date Joined: {dateJoined}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: {membershipLevel}</p>
      </Card.Content>
    </Card>
  );
};

// const Account = () => (
//   <AccountConsumer>
//     {(value) => (
//       <Card>
//         <Card.Content>
//           <Card.Header>{value.username}</Card.Header>
//           <Card.Meta>Date Joined: {value.dateJoined}</Card.Meta>
//         </Card.Content>
//         <Card.Content>
//           <p>Membership Level: {value.membershipLevel}</p>
//         </Card.Content>
//       </Card>
//     )}
//   </AccountConsumer>
// );

export default Account;
