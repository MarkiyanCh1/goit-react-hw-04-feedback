import React from 'react';
import { List, Button } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </List>
  );
};

export default FeedbackOptions;
