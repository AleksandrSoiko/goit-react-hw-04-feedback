import capitalize from 'lodash.capitalize';
import PropTypes from 'prop-types';
import { Div, Btn } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map(button => {
        return (
          <Btn
            type="button"
            name={button}
            key={nanoid()}
            onClick={onLeaveFeedback}
          >
            {capitalize(button)}
          </Btn>
        );
      })}
    </Div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
