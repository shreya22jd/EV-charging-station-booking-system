import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { button1 } from '../common/button';
import userIcon from '../../assets/userIcon.png';
import passwordIcon from '../../assets/passwordIcon.png';
import EmailIcon from '../../assets/EmailIcon.png';
import contactIcon from '../../assets/contactIcon.png';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.Container}>
        <Text style={styles.text}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Image source={userIcon} style={styles.icon} />
            <TextInput
              style={styles.InputText}
              placeholder="Username"
              placeholderTextColor="#777"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={EmailIcon} style={styles.icon} />
            <TextInput
              style={styles.InputText}
              placeholder="Email Id"
              placeholderTextColor="#777"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={contactIcon} style={styles.icon} />
            <TextInput
              style={styles.InputText}
              placeholder="Contact Number"
              placeholderTextColor="#777"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={passwordIcon} style={styles.icon} />
            <TextInput
              style={styles.InputText}
              placeholder="Password"
              placeholderTextColor="#777"
              secureTextEntry
            />
          </View>

          <View style={styles.inputWrapper}>
            <Image source={passwordIcon} style={styles.icon} />
            <TextInput
              style={styles.InputText}
              placeholder="Confirm Password"
              placeholderTextColor="#777"
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('userlogin')}>
          <Text style={button1}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('userlogin')}>
            <Text style={styles.link}>Login here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    width: '90%',
    backgroundColor: '#eef2ec',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2DBE7C',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 12,
    height: 50,
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  InputText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#333',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signInText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#000',
  },
  link: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#2DBE7C',
    fontWeight: 'bold',
  },
});
