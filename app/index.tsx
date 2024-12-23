import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import tw from 'twrnc';
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