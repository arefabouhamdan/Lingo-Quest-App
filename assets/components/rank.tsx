import React from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import Avatar from "./Avatar";

type RankProps = {
  data: any[];
};

const Rank = ({data}: RankProps) => {
  const { themeTextStyle } = useTheme();
  

  return (
    <View style={tw`mt-10`}>
      <View style={tw`flex flex-row items-end justify-center gap-3.5`}>
        <View style={tw`flex flex-col items-center justify-center gap-1`}>
          {/* <Avatar user={data[1]} /> */}
          <Text style={tw`${themeTextStyle} text-lg`}>{data[1]?.name}</Text>
          <View style={tw`bg-sky-400 w-11 h-24 rounded-t`}></View>
        </View>
        <View style={tw`flex flex-col items-center justify-center gap-1`}>
          <Image
            source={require(`@/assets/images/character/Aref.png`)}
            style={tw`w-9 h-14`}
          />
          <Text style={tw`${themeTextStyle} text-lg`}>{data[0]?.name}</Text>
          <View style={tw`bg-sky-400 w-11 h-36 rounded-t`}></View>
        </View>
        <View style={tw`flex flex-col items-center justify-center gap-1`}>
          <Image
            source={require(`@/assets/images/character/Aref.png`)}
            style={tw`w-9 h-14`}
          />
          <Text style={tw`${themeTextStyle} text-lg`}>{data[2]?.name}</Text>
          <View style={tw`bg-sky-400 w-11 h-20 rounded-t`}></View>
        </View>
      </View>
    </View>
  );
};

export default Rank;
