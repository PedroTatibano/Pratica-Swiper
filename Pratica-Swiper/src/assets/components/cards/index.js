import style from "./style";
import { TouchableOpacity, View, Image, Text } from "react-native";

export default function Cards({ action, imagem, id, nome, pais }) {
  return (
    <View style={style.view}>
      <TouchableOpacity style={style.card} onPress={action} id={id}>
        <Image source={imagem} style={style.Image}/>
      </TouchableOpacity>
      <View style={style.textos}>
        <Text style={style.descricao}>{nome}</Text>
        <Text style={style.pais}>{pais}</Text>
      </View>
    </View>
  );
}
