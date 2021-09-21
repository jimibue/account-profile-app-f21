import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

// old way with Consumer (HOC)
// const Navbar = () => (
//   <AccountConsumer>
//     {(value) => (
//       <Menu>
//         <NavLink to="/">
//           <Menu.Item>Home</Menu.Item>
//         </NavLink>
//         <NavLink to="/account/profile">
//           <Menu.Item>
//             {/* Will be replaced with the actual username */}
//             {value.username}
//           </Menu.Item>
//         </NavLink>
//       </Menu>
//     )}
//   </AccountConsumer>
// );

const Navbar = () => {
  const value = useContext(AccountContext);
  return (
    <Menu>
      <NavLink to="/">
        <Menu.Item>Home</Menu.Item>
      </NavLink>
      <NavLink to="/account/profile">
        <Menu.Item>
          {/* Will be replaced with the actual username */}
          {value.username}
        </Menu.Item>
      </NavLink>
    </Menu>
  );
};

export default Navbar;
