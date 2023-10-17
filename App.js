import * as React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const Stack = createNativeStackNavigator();

function Home(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        onPress={() => {
          props.navigation.navigate("Web");
        }}
      >
        <Text>Open web screen</Text>
      </Pressable>
    </SafeAreaView>
  );
}

function Web(props) {
  return (
    <WebView
      source={{ uri: "https://www.hibanapay.com/privacy/privacy.txt" }}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Web" component={Web} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
});
