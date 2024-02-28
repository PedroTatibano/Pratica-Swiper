import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import dados from './dados.json';
import style from './style';
import Swiper from 'react-native-swiper/src';


export default function TelaDados() {
  const route = useRoute();
  const { itemId } = route.params;
  const navigation = useNavigation();

  function getDadosDetails(id) {
    return dados.dados.find(maravilha => maravilha.id === id);
  }

  const itemSelecionado = getDadosDetails(itemId);
  const imagem = require(`../../Imagens/${itemSelecionado.imagem}`);
  const imagem2 = require(`../../Imagens/${itemSelecionado.imagem2}`)

  return (
    <ScrollView style={style.view}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={style.botaoVoltar}>
        <Text style={style.textoBotaoVoltar}>Voltar</Text>
      </TouchableOpacity>

      <Swiper
      showsPagination={false}
      loop={false}
      horizontal 
      style={style.swiper}>
        <View>
          <Image source={imagem} style={style.image} />
        </View>
        <View>
          <Image source={imagem2} style={style.image} />
        </View>
      </Swiper>

      <View style={style.card}>
        <Text style={style.nome}>{itemSelecionado.nome}</Text>
        <Text style={style.descricao}>{itemSelecionado.descricao}</Text>
      </View>
    </ScrollView>
  );
}
