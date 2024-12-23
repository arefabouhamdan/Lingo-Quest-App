import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from '../assets/utils/useTheme';
import Navigation from './navigation';

export default function Index() {
  const {statusBarBackgroundColor } = useTheme();
  
  return (
    <>
    <StatusBar
        backgroundColor={statusBarBackgroundColor}
      />
    <Navigation />
    </>
  );
}