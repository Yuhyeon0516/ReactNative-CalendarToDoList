import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { ITEM_WIDTH } from "../helper/util";

const AddToDoInput = ({ value, onChangeText, placeholder, onPressAdd }) => {
  return (
    <View style={{ flexDirection: "row", width: ITEM_WIDTH, alignSelf: "center" }}>
      <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={{ flex: 1, padding: 5, color: "#595959" }} />
      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" style={{ alignSelf: "center" }} />
      </TouchableOpacity>
    </View>
  );
};

export default AddToDoInput;
