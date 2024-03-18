import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  header: {
    fontSize: 60,
    color: "#C0091E",
    textAlign: 'center',
    fontWeight: '500'
  },
  inner_container: {
    marginTop: 15,
    flexDirection: "column",
    backgroundColor: "#bfbbbb6b",
    borderRadius: 100,
    margin: 10,
  },
  text_container: {
    margin: 5,
  },
  text: {
    fontSize: 50,
    fontWeight: 600,
    textAlign: 'center',
  },
  button: {
    justifyContent: "flex-end",
  },
  btn_text: {
    fontSize: 20,
    color: "#C0091E",
    margin: 10,
    textAlign: 'center',
  },
});
