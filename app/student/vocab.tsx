import Back from '@/assets/components/Back'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'twrnc'
import { useTheme } from "@/assets/utils/useTheme";
import Search from '@/assets/components/Search';

const vocab = () => {
  const {themeViewStyle} = useTheme();
  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <Back/>
      <Search text={"Search for a word"}/>
    </SafeAreaView>
  )
}

export default vocab