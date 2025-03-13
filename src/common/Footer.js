import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import userimg from '../../assets/userIcon.png'; // Ensure correct path

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.footerItem}>
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Booking')} style={styles.footerItem}>
        <Text style={styles.footerText}>Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.footerItem}>
        <Image source={userimg} style={styles.profileIcon} />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
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

export default Footer;
