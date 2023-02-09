import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const HomeScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const addNewGame = async () => {
    try {
      const docRef = await addDoc(collection(db, "games"), {
        home: "Riverton",
        away: "Bingham",
        homeScore: 17,
        awayScore: 5,
        userId: auth.currentUser.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const retrieveGames = async () => {
    const querySnapshot = await getDocs(collection(db, "games"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={addNewGame} style={styles.button}>
        <Text style={styles.buttonText}>Add New Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={retrieveGames} style={styles.button}>
        <Text style={styles.buttonText}>Retrieve Games</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
});
