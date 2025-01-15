import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import Back from '@/assets/components/Back'
import Search from '@/assets/components/Search'
import { useStorage } from '@/hooks/useStorage'
import User from '@/assets/components/User'
import tw from 'twrnc'

const AddFriend = () => {
  const { user } = useStorage();
  const { themeViewStyle, themeTextStyle } = useTheme();

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
       <Back text="Add Friend" />
      <View style={tw`mt-5 w-11/12`}>
        <Search text="Enter name" />
      </View>
      <FlatList
        data={user?.friends}
        renderItem={({ item }) => <User name={item} />}
        style={tw`mt-5 w-11/12`}
      />
      {user?.friends == 0 && (
        <View style={tw`absolute top-1/2`}>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            Searching for a friend? Me too
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default AddFriend