import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get("https://6401dc9d0a2a1afebef3c167.mockapi.io/users")
    .then(res => {
      result = res.data;
      setData(result)
    })
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
        <ScrollView style={styles.container}>
      {
        data.map(item => {
          return <Text style={styles.text} key={item.id}>{item.name}</Text>
        })
      }
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 20
  }
});
