import React from "react";
import Review from "./Review";
import './../styles/App.css';

const App = () => {
  return (
    <main>
      <section className="container">
        <h2 id="review-heading">Our Reviews</h2>
        {/* Render the Review component */}
        <Review />
      </section>
    </main>
  );
};

export default App;

