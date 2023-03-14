import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSplashScreen } from "./components/hooks/use-splashscreen";

export default function App() {
  const { appIsReady, onLayoutRootView } = useSplashScreen();
  if (!appIsReady) return null;
  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaView>
        <Text style={styles.label}>Base Expo</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "black",
  },
});
