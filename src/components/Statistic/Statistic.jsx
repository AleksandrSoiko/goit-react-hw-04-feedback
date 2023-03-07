import PropTypes from 'prop-types';
import { List, Item, Total, PositiveFeedback } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
      </List>
      <Total>Total: {total}</Total>
      <PositiveFeedback>
        Positive feedback: {positivePercentage}%
      </PositiveFeedback>
    </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
