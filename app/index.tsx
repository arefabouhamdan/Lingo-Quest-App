import { Text, View } from "react-native";
import "../global.css"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-slate-500">
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
