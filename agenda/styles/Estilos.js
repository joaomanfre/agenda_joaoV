import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lupa: {
    height: 30,
    width: 30
  },
  viewcontatos: {
    marginTop: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  contatos: {
    fontSize: 30,
    marginLeft: 15,
  },
  itemContato: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  nomeContato: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  telefoneContato: {
    fontSize: 16,
    color: '#666',
  },
  cabecalhoSecao: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#555',
  },
  imgContato: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#dedede',
    borderWidth: 1,
    paddingLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profileLabel: {
    fontSize: 16,
    color: '#888',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profilePhone: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
});

export default styles;


