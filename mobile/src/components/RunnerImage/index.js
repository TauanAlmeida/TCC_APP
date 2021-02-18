import React from 'react';
import LottieView from 'lottie-react-native';

const RunnerImage = () => {
  return (
    <LottieView
      source={require('../../assets/run-man-run.json')}
      autoPlay
      loop
    />
  );
};

export default RunnerImage;
