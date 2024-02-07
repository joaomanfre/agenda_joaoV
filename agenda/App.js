import React, { useState, useEffect } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';
import { View, FlatList, SectionList, Image, SafeAreaView } from 'react-native';
import styles from './styles/Estilos';

export default function App() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [contatos, setContatos] = useState([
      { img: require('./assets/jp.png'), id: '1', nome: 'João Pedro', telefone: '+55 17 99150-8653', email: 'reccojp@gmail.com'},
      { img: require('./assets/erick.png'), id: '2', nome: 'Erick', telefone: '+49 3 8749 3596', email: 'beranerick@adolf.com.de'},
      { img: require('./assets/mayedu.png'), id: '3', nome: 'Mayck', telefone: '+55 17 98809-0058', email: 'mayedu@gmail.com'}, 
      { img: require('./assets/otavio.png'), id: '4', nome: 'Otavio', telefone: '+55 19 99757-1432', email: 'otaviozbn@gmail.com' },
      { img: require('./assets/maycka.jpg'), id: '5', nome: 'Maycka', telefone: '+55 17 92747-0210', email: 'mayckaeduarda@gmail.com'},
      { img: require('./assets/mayckhamed.jpg'), id: '6', nome: 'Mayckhamed', telefone: '+93 83 369 3579', email: 'mayckhamed@talibã.com.af' },
      { img: require('./assets/moraes.png'), id: '7', nome: 'Moraes', telefone: '+55 17 98227-6773', email: 'felipe.desmoraes@gmail.com' },
      { img: require('./assets/felipe.png'), id: '8', nome: 'Felipe', telefone: '+55 17 99121-5210', email: 'felps@gmail.com' },
      { img: require('./assets/pedro.png'), id: '9', nome: 'Pedro', telefone: '+55 17 99131-6630', email: 'eversonzoio@contato.com' },
      { img: require('./assets/bia.jpg'), id: '10', nome: 'Dagoani', telefone: '+55 17 99131-6630', email: 'biatroço@gmail.com'},
  ]);

  const [contatosFiltrados, setContatosFiltrados] = useState(contatos);

  useEffect(() => {
    if (searchText === '') {
      setContatosFiltrados(contatos);
    } else {
      setContatosFiltrados(contatos.filter(contato =>
        contato.nome.toLowerCase().includes(searchText.toLowerCase())
      ));
    }
  }, [searchText, contatos]);

  const [contatosAgrupados, setContatosAgrupados] = useState([]);

  useEffect(() => {
    const grupos = contatosFiltrados.reduce((grupos, contato) => {
      const letraInicial = contato.nome[0].toUpperCase();
      if (!grupos[letraInicial]) {
        grupos[letraInicial] = [];
      }
      grupos[letraInicial].push(contato);
      return grupos;
    }, {});

    const secoes = Object.keys(grupos).sort().map(letraInicial => ({
      title: letraInicial,
      data: grupos[letraInicial],
    }));

    setContatosAgrupados(secoes);
  }, [contatosFiltrados]);
  // ...seu estado e funções aqui...

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={
          <>
            <View style={styles.viewcontatos}>
              <Text style={styles.contatos}>Contatos</Text>
              <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
                <Image style={styles.lupa} source={require('./assets/lupa.png')}/>
              </TouchableOpacity>
            </View>

            {searchVisible && (
              <TextInput
                style={styles.searchBar}
                onChangeText={text => setSearchText(text)}
                value={searchText}
                placeholder="Digite o nome do contato..."
              />
            )}

            <View style={styles.profileContainer}>
              <Text style={styles.profileLabel}>Meu Contato</Text>
              <Image
                style={styles.profileImage}
                source={require('./assets/eu.jpg')}
              />
              <Text style={styles.profileName}>João Víctor</Text>
              <Text style={styles.profilePhone}>017 99123-7982</Text>
            </View>
          </>
        }
        sections={contatosAgrupados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContato}>
            <Image style={styles.imgContato} source={item.img}/>
            <View>
              <Text style={styles.nomeContato}>{item.nome}</Text>
              <Text style={styles.telefoneContato}>{item.telefone}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.cabecalhoSecao}>{title}</Text>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
