import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const GameManager = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const navigateHome = () => navigation.navigate("Home");

  const retrieveGames = async () => {
    const querySnapshot = await getDocs(collection(db, "games"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Game Manager</Text>
      </View>
      <Text>Email: {auth.currentUser?.email}</Text>
      {/* <TouchableOpacity onPress={addNewGame} style={styles.button}>
      <Text style={styles.buttonText}>Add New Game</Text>
    </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={retrieveGames} style={styles.button}>
      <Text style={styles.buttonText}>Retrieve Games</Text>
    </TouchableOpacity>  */}
      <TouchableOpacity onPress={retrieveGames} style={styles.button}>
        <Text style={styles.buttonText}>Retrieve Games</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateHome} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      {/* 
    <TouchableOpacity onPress={handleSignOut} style={styles.button}>
      <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity> */}
    </View>
  );
};

export default GameManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
