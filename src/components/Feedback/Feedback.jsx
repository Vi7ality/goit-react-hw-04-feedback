import { useState, useEffect } from 'react';
import { ButtonList } from 'components/ButtonList/ButtonList';
import { Statistics } from 'components/Statistics/Statistics';

export function Feedback(step = 1) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleIncrement = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositive(((good / total) * 100).toFixed(0));
  }, [good, bad, neutral, total]);

  return (
    <div>
      <h1>Please, leave feedback</h1>
      <ButtonList handleIncrement={handleIncrement}></ButtonList>
      {total === 0 ? (
        <p> No feedback was given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        ></Statistics>
      )}
    </div>
  );
}
