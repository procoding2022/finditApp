import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const Live = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold mb-4">Live Feed</Text>

      <View className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
        <WebView
          source={{ uri: "http://192.168.97.25:8081/" }}
          style={{ width: "100%", height: "100%" }}
        />

      </View>
    </SafeAreaView>
  );
};

export default Live;


