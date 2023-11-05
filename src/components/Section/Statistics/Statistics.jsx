import React from 'react';
import { StatisticsList, StaticticsEl } from './Statistics.styles';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StaticticsEl>Good: {good}</StaticticsEl>
      <StaticticsEl>Neutral: {neutral}</StaticticsEl>
      <StaticticsEl>Bad: {bad}</StaticticsEl>
      <StaticticsEl>Total: {total}</StaticticsEl>
      <StaticticsEl>Positive feedback: {positivePercentage}%</StaticticsEl>
    </StatisticsList>
  );
};

export default Statistics;
