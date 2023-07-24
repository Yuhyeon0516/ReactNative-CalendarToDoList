import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getCalendarColumns } from "./src/helper/util";
import dayjs from "dayjs";
import { useEffect } from "react";

export default function App() {
  const now = dayjs();
  const colums = getCalendarColumns(now);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
