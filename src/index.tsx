import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from "./props/Parent";
import Home from "./props/Home";
import Layout from "./Layout";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchClass from "./classes/UserSearchClass";
import UserSearchRefs from "./refs/UserSearchRefs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="event" element={<EventComponent />} />
          <Route path="parent" element={<Parent />} />
          <Route path="guest" element={<GuestList />} />
          <Route path="user" element={<UserSearch />} />
          <Route path="userrefs" element={<UserSearchRefs />} />
          <Route
            path="userclass"
            element={<UserSearchClass users={[{ name: "david", age: 20 }]} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
root.render(<App />);
