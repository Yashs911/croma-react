import React from "react";
import { SingleColorView } from "../components/SingleColorView";
import { ScrollView, StyleSheet } from "react-native";
import CromaButton from "../components/CromaButton";

export default function ColorListScreen(props) {
  const colors = uniqueColors(props.navigation.getParam("colors"));
  return (
    <ScrollView style={styles.listview}>
      {colors.map(color => (
        <SingleColorView key={color.color} color={color.color} />
      ))}
      <CromaButton
        onPress={() =>
          props.navigation.navigate("SavePalette", { colors: colors })
        }
      >
        SAVE AS NEW PALETTE
      </CromaButton>
    </ScrollView>
  );
}
function uniqueColors(colors) {
  let set = new Set();
  let uniqueColors = [];
  colors.forEach(color => {
    console.log("Color: " + color.color);
    if (!set.has(color.color)) {
      console.log("inside===" + color.color);
      uniqueColors.push(color);
    }
    set.add(color.color);
  });
  return uniqueColors;
}

ColorListScreen.navigationOptions = {
  title: "Colors"
};

const styles = StyleSheet.create({
  listview: {
    margin: 8
  }
});