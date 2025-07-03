// HomeViewWrapper.jsx
import React from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router-dom';

const HomeViewWrapper = () => {
  const navigate = useNavigate();
  return <HomeView navigate={navigate} />;
};

export default HomeViewWrapper;
