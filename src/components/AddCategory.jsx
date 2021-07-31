import { React, useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategory }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleInput = (e) => setNewCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newCategory.trim().length > 2) {
      setCategory((prev) => [newCategory, ...prev]);
      setNewCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newCategory} onChange={handleInput} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
