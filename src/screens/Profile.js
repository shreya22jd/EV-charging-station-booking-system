import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  });

  return (
    <View style={styles.container}>
      {/* Profile Picture & Name */}
      <View style={styles.profileHeader}>
        <Image
          source={require("../../assets/userIcon.png")} // Ensure correct path
          style={styles.profilePic}
        />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("Account")}>
          <Text style={styles.optionText}>👤 Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("YourBooking")}>
          <Text style={styles.optionText}>📅 Your Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("PrivacyPolicy")}>
          <Text style={styles.optionText}>🔒 Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionBox} onPress={() => navigation.navigate("TermsConditions")}>
          <Text style={styles.optionText}>📜 Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionBox, styles.logoutButton]} onPress={() => alert("Logged Out!")}>
          <Text style={[styles.optionText, { color: "red" }]}>🚪 Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 30, // Space below profile section
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 100,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    top:-90,
  },
  profileEmail: {
    fontSize: 19,
    color: "#666",
    top:-80,
  },
  menuContainer: {
    width: "90%",
    alignItems: "center",
  },
  optionBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "150%",
    marginBottom: 10,
    alignItems: "center",
    elevation: 3, // Shadow effect
    top:-60,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#ffe6e6",
  },
});
