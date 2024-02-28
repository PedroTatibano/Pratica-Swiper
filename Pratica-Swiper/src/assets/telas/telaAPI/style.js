import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  botaoVoltar: {
    marginTop: '3%',
    marginBottom: '3%',
    width: 80,
    height: 30,
    backgroundColor: "#202020",
    borderRadius: 8,
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    paddingLeft: 10,
    marginLeft: '2%' 
  },
  textoBotaoVoltar: {
    fontSize: 18,
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  swiper: {
    height: screenWidth * 0.6,
    justifyContent: 'center',
    marginHorizontal: '5%', 
   
  },
  image: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.6,
    resizeMode: 'cover',
    marginHorizontal: '5%',
    borderRadius:15,
  },
  card: {
    marginTop: '20%',
    padding: 30, 
    backgroundColor: "#202020",
    margin: 10,
    borderRadius: 15, 
  },
  nome: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginBottom: 15, 
    color: '#ffd700',
    textAlign: 'center', 
  },
  descricao: {
    fontSize: 20, 
    color: '#fff',
    textAlign: 'center', 
  },
});

export default styles;
