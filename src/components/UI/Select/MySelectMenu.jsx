import React from "react";
import styles from "./MySelectMenu.module.css";

const MySelectMenu = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.description}</option>
      ))}
    </select>
  );
};

export default MySelectMenu;
