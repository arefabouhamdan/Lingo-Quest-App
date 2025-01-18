import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Back from "@/assets/components/Back";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import AlertModal from "@/assets/components/modals/alertModal";
import Progress from "@/assets/components/progress";
import Congrats from "@/assets/components/modals/congrats";
import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "@/assets/utils/baseUrl";
import { useStorage } from "@/hooks/useStorage";
import { useQuery } from "react-query";
import Lives from "@/assets/components/lives";
import LoseModal from "@/assets/components/modals/loseModal";
import HintModal from "@/assets/components/modals/hintModal";
import { useUpdate } from "@/hooks/useUpdateXp";

const Level1 = () => {
  const { themeViewStyle, themeTextStyle } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [stage, setStage] = useState(4);
  const [isFocused, setIsFocused] = useState(false);
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [jsonResponse, setJsonResponse] = useState();
  const [lives, setLives] = useState(3);
  const [loseModalVisible, setLoseModalVisible] = useState(false);
  const [hintModalVisible, setHintModalVisible] = useState(false);
  const updateMutation = useUpdate();

  const numberOfStages = 5;
  const { user } = useStorage();
  const language = user?.language;

  const { mutate: sendMessage, data: aiResponse } = useMutation(
    async ({
      input,
      history,
    }: {
      input: string;
      history: { role: string; parts: [{ text: string }] }[];
    }) => {
      const response = await axios.post(`${BASE_URL}/ai`, {
        input,
        history,
      });
      const cleanedResponse = await response.data
        .split("```json")[1]
        .split("```")[0]
        .trim();
      return cleanedResponse;
    },
    {
      onSuccess: (returnedData) => {
        try {
          const parsed = JSON.parse(returnedData);
          setJsonResponse(parsed);
          setChatHistory((prevHistory) => [
            ...prevHistory,
            { role: "model", parts: [{ text: parsed?.message ?? "" }] },
          ]);
        } catch (error) {
          console.error("Failed to parse JSON:", error);
          setJsonResponse(null);
          setChatHistory((prevHistory) => [
            ...prevHistory,
            { role: "model", parts: [{ text: returnedData }] },
          ]);
        }
      },
    }
  );
  useEffect(() => {
    if (jsonResponse?.status === "success" && stage <= numberOfStages) {
      setStage((prevStage) => prevStage + 1);
      if (stage == numberOfStages - 1) {
        setIsModalVisible(true);
        if (user) {
          if (lives === 3) {
            updateMutation.mutate({
              level: user.level > 1 ? user.level : 2,
              username: user.name,
              xp: user.xp + 20,
            });
          }
          else if (lives === 2) {
            updateMutation.mutate({
              level: user.level > 1 ? user.level : 2,
              username: user.name,
              xp: user.xp + 10,
            });
          }
          else if (lives === 1) {
            updateMutation.mutate({
              level: user.level > 1 ? user.level : 2,
              username: user.name,
              xp: user.xp + 5,
            });
          }
        }
      }
    } else if (jsonResponse?.status === "failed") {
      if (lives === 1) {
        setLoseModalVisible(true);
      }
      setLives((prevLives) => prevLives - 1);
    }
  }, [jsonResponse]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const updatedHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: inputValue }] },
    ];

    sendMessage({
      input: inputValue,
      history: updatedHistory,
    });
    setInputValue("");
    setChatHistory(updatedHistory);
  };

  const fetchLevel = async () => {
    const response = await axios.get(`${BASE_URL}/levels/1`);
    return response.data;
  };

  const { data: levelData, isLoading } = useQuery(
    ["Level", 1],
    () => fetchLevel(),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (levelData && language) {
      setChatHistory((prevHistory) => [
        {
          role: "user",
          parts: [
            { text: `You are a ${language} speaking${levelData.message}.` },
          ],
        },
        ...prevHistory,
      ]);
    }
  }, [levelData, language]);

  return (
    <SafeAreaView style={tw`${themeViewStyle}flex-1 items-center`}>
      <Back text="Level 1" background setModalVisible={setModalVisible} />
      <AlertModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Congrats
        level={1}
        modalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
      />
      <HintModal
        modalVisible={hintModalVisible}
        setModalVisible={setHintModalVisible}
      />
      <LoseModal
        modalVisible={loseModalVisible}
        setModalVisible={setLoseModalVisible}
      />
      <View style={tw`w-full h-1/1.8 items-center justify-start`}>
        {jsonResponse?.message && (
          <View
            style={tw`absolute top-20 z-20 w-11/12 h-1/4 bg-white rounded p-5 justify-center`}
          >
            <Text style={tw`text-center text-2xl font-bold`}>
              {jsonResponse?.message}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={tw`flex items-center justify-center rounded absolute z-20 top-4 left-5`}
          onPress={() => setHintModalVisible(true)}
        >
          <Icon name="bulb" size={36} color="white" />
        </TouchableOpacity>
        <View style={tw`absolute flex-row-reverse gap-2 top-5 right-5 z-20`}>
          {[...Array(3)].map((_, index) => (
            <Lives key={index} status={index < lives} />
          ))}
        </View>
        <Image
          source={require("@/assets/images/game/coffeeshop-night-1.png")}
          style={tw`w-full h-full relative`}
        />
        <Image
          source={require("@/assets/images/game/Barista.png")}
          style={tw`flex-1 w-39 h-70 absolute bottom-0`}
        />
      </View>
      <View style={tw`w-11/12 flex-row items-center justify-between mt-5`}>
        {[...Array(numberOfStages)].map((_, index) =>
          index < stage ? (
            <Progress key={index} passed />
          ) : (
            <Progress key={index} passed={false} />
          )
        )}
      </View>
      <View
        style={tw`w-11/12 h-1/5 flex-row items-center justify-between mt-5 border border-gray-200 rounded `}
      >
        <TextInput
          style={tw`${themeTextStyle} flex-1 text-center px-3 pt-4 font-bold text-2xl`}
          placeholder={!isFocused && !inputValue ? "Type here" : ""}
          placeholderTextColor="#999"
          value={inputValue}
          onChangeText={setInputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <View style={tw`flex-row items-center justify-between gap-5`}>
        <TouchableOpacity
          style={tw`w-48 h-14 bg-sky-400 flex-row gap-5 items-center justify-center rounded mt-5`}
          onPress={handleSendMessage}
          disabled={isLoading}
        >
          <Icon name="paper-plane" size={20} color="white" />
          <Text style={tw`text-lg font-bold text-white`}>
            {isLoading ? "Sending..." : "Send Message"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Level1;
