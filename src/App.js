import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript library",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You can use React by creating components",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
];

const showAccordian = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown label="Select a Language" options={options} />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return (
    <div>
      {showAccordian()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};
