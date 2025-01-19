import React, { useState, useEffect } from "react";
import { Text, Image, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../hooks/useTheme";
import { useRegister } from "@/hooks/useRegistration";
import Button from "../../assets/components/Button";
import Back from "@/assets/components/Back";
import { languages } from "../../assets/utils/languages";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const ChooseLanguage = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("");
  const [userAvatar, setUserAvatar] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [language, setLanguage] = useState("");
  const { themeTextStyle, themeViewStyle } = useTheme();
  const registerMutation = useRegister();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userType = await AsyncStorage.getItem("user_type");
        const storedAvatar = await AsyncStorage.getItem("user_avatar");
        const storedLanguage = await AsyncStorage.getItem("user_language");
        const storedName = await AsyncStorage.getItem("user_name");
        const storedEmail = await AsyncStorage.getItem("user_email");
        const storedPassword = await AsyncStorage.getItem("user_password");

        if (userType) setType(userType);
        if (storedAvatar) setUserAvatar(JSON.parse(storedAvatar));
        if (storedLanguage) setLanguage(storedLanguage);
        if (storedName) setUserName(storedName);
        if (storedEmail) setUserEmail(storedEmail);
        if (storedPassword) setUserPassword(storedPassword);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handlePress = async (selectedLanguage: string) => {
    try {
      await AsyncStorage.setItem("user_language", selectedLanguage);
        registerMutation.mutate({
          name: userName,
          email: userEmail,
          password: userPassword,
          type: type,
          avatar: userAvatar,
          language: selectedLanguage,
        });
        {type === "user" ? navigation.navigate("MainHome" as never) : navigation.navigate("TutorHome" as never)}
    } catch (error) {
      console.log("Error saving user language:", error);
    }
  };

  return (
    <SafeAreaView style={tw`${themeViewStyle} flex-1`}>
      <Back text="Choose Language" background/>
      <View style={tw`flex items-center mt-10`}>
        <Image
          source={require("../../assets/images/game/guide-choose.png")}
          style={tw`w-52 h-68 mb-5`}
        />

        <View style={tw`flex flex-col items-center gap-5 h-100`}>
          <Text style={tw`${themeTextStyle} text-xl font-bold`}>
            Choose a language to learn
          </Text>

          <FlatList
            data={languages}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw`m-2 ${
                  item.name === language ? "opacity-100" : "opacity-50"
                }`}
                onPress={() => setLanguage(item.name)}
              >
                <Image source={item.source} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            numColumns={3}
          />

          <TouchableOpacity onPress={() => handlePress(language)}>
            <Button text="Continue" type="submit" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseLanguage;
