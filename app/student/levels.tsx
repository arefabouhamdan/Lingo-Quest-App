import React, {useCallback} from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Level from "@/assets/components/level";
import LanguageBar from "@/assets/components/languageBar";
import tw from "twrnc";
import { useStorage } from "@/hooks/useStorage";
import { levelsData } from "@/assets/utils/levels";
import { useQuery } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import { useFocusEffect } from "@react-navigation/native";

const Levels = () => {
  const { themeViewStyle } = useTheme();
  const { user } = useStorage();
  const fetchUserByName = async (name: string) => {
    const response = await axios.get(`${BASE_URL}/users/${name}`);
    return response.data;
  };
  
  
  const { data, isLoading, refetch } = useQuery(
    ["user", user?.name],
    () => fetchUserByName(user?.name),
    {
      enabled: false,
    }
  );

  useFocusEffect(
      useCallback(() => {
        const fetchData = async () => {
          const { data } = await refetch();
        };
        fetchData();
      }, [refetch])
    );

  return (
    <SafeAreaView
      style={tw`${themeViewStyle} flex-1 items-center justify-center`}
    >
      <LanguageBar/>

      <FlatList
        data={levelsData}
        renderItem={({ item, index }) => (
          <Level
            status={data?.level >= index + 1 ? "active" : "inactive"}
            level={item.level}
            type={item.type}
          />
        )}
        inverted={true}
        style={tw`flex-1 w-full`}
      />
    </SafeAreaView>
  );
};

export default Levels;
