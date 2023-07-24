import { View, Text, TouchableOpacity } from "react-native";
import CalendarColumn from "./src/components/CalendarColumn";
import { getDayColor, getDayText } from "../helper/util";
import dayjs from "dayjs";
import CalendarArrowButton from "./CalendarArrowButton";

const Header = () => {
  const now = dayjs();
  const currentDateText = dayjs(now).format("YYYY.MM.DD");
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <CalendarArrowButton onPress={() => {}} iconName={"arrow-left"} />
        <TouchableOpacity>
          <Text style={{ fontSize: 20, color: "#404040" }}>{currentDateText}</Text>
        </TouchableOpacity>
        <CalendarArrowButton onPress={() => {}} iconName={"arrow-right"} />
      </View>

      <View style={{ flexDirection: "row" }}>
        {[0, 1, 2, 3, 4, 5, 6].map((day) => {
          return <CalendarColumn key={`day-${day}`} text={getDayText(day)} color={getDayColor(day)} opacity={1} />;
        })}
      </View>
    </View>
  );
};

export default Header;
