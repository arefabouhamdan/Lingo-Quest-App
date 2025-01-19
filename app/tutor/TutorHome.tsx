import LanguageBar from "@/assets/components/languageBar";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import tw from "twrnc";
import User from "@/assets/components/User";
import { useStorage } from "@/hooks/useStorage";
import { useNavigation } from "@react-navigation/native";
import Button from "@/assets/components/Button";
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "@/assets/utils/baseUrl";
import Icon from "react-native-vector-icons/Ionicons";

const TutorHome = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const { logout } = useStorage();
  const navigation = useNavigation();
  const { user } = useStorage();

  const handlePress = () => {
    logout();
    navigation.navigate("Welcome" as never);
  };

  const handleRefresh = () => {
    refetch();
  };

  const fetchResults = async () => {
    const response = await axios.get(`${BASE_URL}/results`);
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery(
    ["userLeaderboard"],
    fetchResults,
    {
      enabled: true,
    }
  );
  

  const borderStyle = `${themeViewStyle} flex items-center p-5 justify-center gap-5 mt-10 rounded-lg w-11/12 h-30 border border-gray-200`;
  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1 items-center`}>
      <LanguageBar />
      <View style={tw`${borderStyle}`}>
        <Text style={tw`${themeTextStyle} text-xl font-bold`}>
          Number of Tests
        </Text>
        <Text style={tw`${themeTextStyle} text-3xl font-bold`}>
          {data.filter((item) => !item.corrected && item.language == user?.language)?.length}
        </Text>
      </View>
      {isLoading ? (
        <View style={tw`${borderStyle}`}>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            Loading ...
          </Text>
        </View>
      ) : (
        <FlatList
          data={data.filter((item) => !item.corrected && item.language == user?.language)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("TestCorrection", item)}>
              <User name={item.student} info={`Level ${item.level}`} tutor />
            </TouchableOpacity>
          )}
          style={tw`mt-10 w-11/12`}
        />
      )}

      <View style={tw`flex-row justify-center items-center w-full mt-10 gap-5`}>
        <TouchableOpacity style={tw`mb-10`} onPress={handlePress}>
          <Button text="Logout" type="submit" />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-sky-400 rounded-2 self-center w-14 h-14 flex justify-center items-center mb-5`}
          onPress={handleRefresh}
        >
          <Icon name="refresh" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TutorHome;
