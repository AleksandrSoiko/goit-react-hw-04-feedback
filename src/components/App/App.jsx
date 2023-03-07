import { useState } from 'react';
import { Statistic } from 'components/Statistic/Statistic';
import { Container } from '../Layout/Layout.styled';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;
    if (name === 'good') {
      setGood(prevValue => prevValue + 1);
    }
    if (name === 'neutral') {
      setNeutral(prevValue => prevValue + 1);
    }
    if (name === 'bad') {
      setBad(prevValue => prevValue + 1);
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((100 / countTotalFeedback()) * good);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
