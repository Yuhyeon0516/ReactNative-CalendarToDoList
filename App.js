import { FlatList, StyleSheet } from "react-native";
import { getCalendarColumns, getDayColor } from "./src/helper/util";
import dayjs from "dayjs";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import CalendarColumn from "./src/components/CalendarColumn";
import Header from "./src/components/Header";
import CalendarRenderItem from "./src/components/CalendarRenderItem";

export default function App() {
  const now = dayjs();
  const colums = getCalendarColumns(now);

  useEffect(() => {}, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList data={colums} keyExtractor={(_, index) => `column-${index}`} renderItem={CalendarRenderItem} numColumns={7} ListHeaderComponent={Header} />
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
});
