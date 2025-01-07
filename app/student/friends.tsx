import Search from '@/assets/components/Search'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import tw from 'twrnc'

const Friends = () => {
  return (
    <SafeAreaView style={tw`flex items-center`}>
        <View style={tw`mt-5 w-11/12`}>
            <Search text='Lost your friend? Search for him'/>
        </View>
    </SafeAreaView>
  )
}

export default Friends