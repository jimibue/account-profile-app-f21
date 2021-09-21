import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { AccountContext } from "../providers/AccountProvider";

const AccountForm = () => {
  const { username, membershipLevel, updateAccount } =
    useContext(AccountContext);
  const [formData, setFormData] = useState({
    username: username,
    membershipLevel: membershipLevel,
  });

  const handleChange = (e, { name, value }) => {
    // this.setState({ [name]: value });
    // es6 cloing form data in a new objec and update
    // which ever input was changed
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAccount(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="New Username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <Form.Select
        label="Membership Level"
        name="membershipLevel"
        value={formData.membershipLevel}
        onChange={handleChange}
        options={membershipOptions}
      />
      <Form.Button color="blue">Save</Form.Button>
    </Form>
  );
};

export default AccountForm;

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
];
