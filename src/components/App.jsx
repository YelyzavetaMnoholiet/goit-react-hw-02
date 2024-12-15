import Description from "./Description/Description";
import Option from "./Options/Option";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews
      ? JSON.parse(savedReviews)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [feedbackType]: prevReviews[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positive = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <div className="App">
      <Description className="title" />
      <Option
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;
