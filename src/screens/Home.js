import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import Footer from '../common/Footer'; 
import userimg from '../../assets/userIcon.png';

const Home = ({ navigation }) => {

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp(); // Exit app immediately without an alert
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);
    
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home</Text>
      <Text style={styles.subtitle}>You have successfully logged in!</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SendMoney')}
      >
        <Text style={styles.buttonText}>Send Money</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('RequestMoney')}
      >
        <Text style={styles.buttonText}>Request Money</Text>
      </TouchableOpacity>

      {/* Footer Navigation */}
      <Footer navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2DBE7C',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
    flex: 1,
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  profileIcon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
});
