import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FlexDemo } from "./components/FlexDemo";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "grey", flex: 6 }}>
        <FlexDemo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
