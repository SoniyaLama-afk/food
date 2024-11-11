import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./Recipe";
import RecipeDetail from "./RecipeDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />{" "}
       
      </Routes>
    </Router>
  );
};

export default App;
