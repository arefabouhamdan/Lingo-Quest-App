import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/assets/utils/useTheme";
import tw from "twrnc";

const Rank = () => {
  const { themeTextStyle } = useTheme();
  let first = "Aref";
  let second = "Oday";
  let third = "Rony";

  return (
    <View style={tw`mt-10`}>
      <View style={tw`flex flex-row items-end justify-center gap-3.5`}>
        <View style={tw`flex flex-col items-center justify-center gap-1`}>
          <Image
            source={require(`@/assets/images/character/Aref.png`)}
            style={tw`w-9 h-14`}
          />
          <Text style={tw`${themeTextStyle} text-lg`}>{second}</Text>
          <View style={tw`bg-sky-400 w-11 h-24 rounded-t`}></View>
        </View>
        <View style={tw`flex flex-col items-center justify-center gap-1`}>
          <Image
            source={require(`@/assets/images/character/Aref.png`)}
            style={tw`w-9 h-14`}
          />
          <Text style={tw`${themeTextStyle} text-lg`}>{first}</Text>
          <View style={tw`bg-sky-400 w-11 h-36 rounded-t`}></View>
        </View>
        <View style={tw`flex flex-col items-center justify-center gap-1`}>
          <Image
            source={require(`@/assets/images/character/Aref.png`)}
            style={tw`w-9 h-14`}
          />
          <Text style={tw`${themeTextStyle} text-lg`}>{third}</Text>
          <View style={tw`bg-sky-400 w-11 h-20 rounded-t`}></View>
        </View>
      </View>
    </View>
  );
};

export default Rank;
