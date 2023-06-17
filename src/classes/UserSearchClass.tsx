import React, { Component, ReactNode } from "react";
// import { faker } from "@faker-js/faker";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  // createUser = () => {
  //   return {
  //     name: faker.person.firstName(),
  //     age: faker.number.int({ min: 20, max: 50 }),
  //   };
  // };
  // createUsers = (numUsers = 5) => {
  //   return Array.from({ length: numUsers }, this.createUser);
  // };
  // users = this.createUsers(5);

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user?.name === this.state?.name;
    });

    this.setState({ user: foundUser });
  };

  render(): ReactNode {
    // this.props.users;
    // this.state.name;
    // this.state.user;
    const { name, user } = this.state;

    return (
      <div>
        <h3>Guest List</h3>
        <ul>
          {this.props.users.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>Found User: {user && user.name}</div>
        <div>User Age: {user && user.age}</div>
      </div>
    );
  }
}

export default UserSearchClass;
