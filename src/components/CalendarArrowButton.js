import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const CalendarArrowButton = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
      <SimpleLineIcons name={iconName} size={15} color="#404040" />
    </TouchableOpacity>
  );
};

export default CalendarArrowButton;
