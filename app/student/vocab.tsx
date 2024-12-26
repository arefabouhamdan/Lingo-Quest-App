import Back from '@/assets/components/Back'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'twrnc'
import { useTheme } from "@/assets/utils/useTheme";
import Word from '@/assets/components/word';

const vocab = () => {
  const {themeViewStyle} = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back/>
      <Word word={'Spielen'}/>
    </SafeAreaView>
  )
}

export default vocab