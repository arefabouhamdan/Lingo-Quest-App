import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";
import { useTheme } from "@/hooks/useTheme";
import { useColorScheme } from "react-native";
import Rank from "@/assets/components/rank";
import tw from "twrnc";
import LeaderList from "@/assets/components/leaderList";
import BottomBar from "@/assets/components/bottomBar";

const Leaderboard = () => {
  const [topThree, setTopThree] = useState<any[]>([]);
  const [rest, setRest] = useState<any[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get(`http://192.168.1.102:3000/users`);
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery(
    ["userLeaderboard"],
    () => fetchUsers(),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const { data: fetchedData } = await refetch();
      if (fetchedData) {
        setTopThree(fetchedData.slice(0, 3));
        setRest(fetchedData.slice(3, 50));
      }
    };
    fetchData();
  }, [refetch]);

  const colorScheme = useColorScheme();
  const { themeViewStyle, themeTextStyle } = useTheme();

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-start`}
    >
      <View
        style={tw`${themeViewStyle} flex flex-row items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-22 border border-gray-200`}
      >
        {colorScheme === "light" ? (
          <Image
            source={require("@/assets/images/icons/shield-black.png")}
            style={tw``}
          />
        ) : (
          <Image
            source={require("@/assets/images/icons/shield-white.png")}
            style={tw``}
          />
        )}
        <Text style={tw`${themeTextStyle} text-2xl font-bold `}>
          Top 50 Leaderboard
        </Text>
      </View>
      {isLoading ? (
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`${themeTextStyle} text-lg font-bold`}>
            Loading...
          </Text>
        </View>
      ) : (
        <>
          <Rank data={topThree} />
          <LeaderList data={rest} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Leaderboard;
