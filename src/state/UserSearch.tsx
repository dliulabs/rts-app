import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const createUser = () => {
  return {
    name: faker.person.firstName(),
    age: faker.number.int({ min: 20, max: 50 }),
  };
};

const createUsers = (numUsers = 5) => {
  return Array.from({ length: numUsers }, createUser);
};

const users = createUsers(5);

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    console.log(foundUser);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>Found User: {user && user?.name}</div>
      <div>User Age: {user && user?.age}</div>
    </div>
  );
};

export default UserSearch;
