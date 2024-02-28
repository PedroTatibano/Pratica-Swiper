import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    height: height * 0.17,
    width: width * 0.4,
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor:"#ffd700",
  },
  Image: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
    borderRadius: 15,
  },
  textos: {
    alignItems: 'flex-start', 
  },
  descricao: {
    fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    color:'#fff'
  },
  pais: {
    fontFamily: 'Arial',
    fontSize: 12,
    textAlign: 'center',
    color:'#fff'
  }
});
