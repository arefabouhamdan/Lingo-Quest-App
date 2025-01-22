import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === "light" ? "text-black" : "text-white ";
  const themeViewStyle = colorScheme === "light" ? "bg-white " : "bg-gray-800 ";
  const statusBarStyle = colorScheme === "light" ? "dark-content" : "light-content";
  const statusBarBackgroundColor = colorScheme === "light" ? "#ffffff" : "#1F2937";

  return {
    colorScheme,
    themeTextStyle,
    themeViewStyle,
    statusBarStyle,
    statusBarBackgroundColor,
  };
};