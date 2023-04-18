import ReviewList from "./components/ReviewList";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import SingleReview from "./components/SingleReview";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
