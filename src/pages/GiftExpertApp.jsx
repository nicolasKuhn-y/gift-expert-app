import { React, useState } from "react";
import { AddCategory } from "../components/AddCategory";
import { GiftGridDisplayer } from "../components/GiftGridDisplayer";
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const generateGrid = categories.map((category, index) => (
    <GiftGridDisplayer key={index} categorie={category} />
  ));

  return (
    <main className="main">
      <section className="addCategory-container">
        <div className="form-wrapper">
          <h2>GiftExpertApp</h2>
          <AddCategory setCategory={setCategories} />
        </div>
        
      </section>
      <ul>{generateGrid}</ul>
    </main>
  );
};
