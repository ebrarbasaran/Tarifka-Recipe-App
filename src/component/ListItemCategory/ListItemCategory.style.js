import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius:10,
  },
  text_container: {
    width:'100%',
    backgroundColor: "#00000087",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    fontSize: 25,
    color: "#fff",
    textAlign: 'right',
    marginRight: 5,
  },
});
