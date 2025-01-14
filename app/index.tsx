import React from "react";
import { StatusBar } from "react-native";
import { QueryClientProvider, QueryClient } from "react-query";
import { useTheme } from "../assets/utils/useTheme";
import Navigation from "./navigation";

export default function Index() {
  const { statusBarBackgroundColor } = useTheme();
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={statusBarBackgroundColor} />
      <Navigation />
    </QueryClientProvider>
    </>
  );
}
