import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import Cards from '../../components/cards';
import Piramide from '../../Imagens/piramide.jpeg'
import Burj from '../../Imagens/burj.jpeg'
import Liberdade from '../../Imagens/EstatuaDaLiberdade.jpeg'
import Muralha from '../../Imagens/muralha.jpeg'
import Palacio from '../../Imagens/palacio.jpeg'
import Cristo from '../../Imagens/Cristo.jpeg'



export default function TelaPrincipal() {
  const navigation = useNavigation();

  function acao(id) {
    navigation.navigate('TelaDados', {itemId: id});
  }

  return (
    <View style={style.view}>
      <View style={style.card}>
        <Cards imagem={Piramide} nome={"Piramide de Gizé"} pais={"Egito"} action={() => acao(1)} />
        <Cards imagem={Burj} nome={"Burj Khalifa"} pais={"Dubai"} action={() => acao(2)} />
        <Cards imagem={Liberdade} nome={"Estatua da Liberdade"} pais={"Estados Unidos"} action={() => acao(3)} />
      </View>

       <View style={style.card}>
        <Cards imagem={Muralha} nome={"Muralha da China"} pais={"China"} action={() => acao(4)} />
        <Cards imagem={Palacio} nome={"Palácio de Mysore"} pais={"Índia"} action={() => acao(5)} />
        <Cards imagem={Cristo} nome={"Cristo Redentor"} pais={"Brasil"}  action={() => acao(6)} />

       </View>
    </View>
  );
}
