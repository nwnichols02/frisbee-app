import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const NewGameScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const navigateHome = () => navigation.navigate("Home");

  const [homeTeam, setHomeTeam] = React.useState("");
  const [awayTeam, setAwayTeam] = React.useState("");

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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>New Game Screen</Text>
      </View>
      <Text>Email: {auth.currentUser?.email}</Text>
      {/* <TouchableOpacity onPress={addNewGame} style={styles.button}>
        <Text style={styles.buttonText}>Add New Game</Text>
      </TouchableOpacity> */}
      {/* <View></View> */}
      <Text>Home Team</Text>
      <TextInput
        style={styles.input}
        placeholder="Home Team"
        placeholderTextColor="#aaaaaa"
        // onChangeText={(text) => setEmail(text)}
        // value={homeTeam}
      >
        {/* <Text>Home Team</Text> */}
      </TextInput>
      <View style={styles.buttonSmWrapper}>
        <TouchableOpacity style={styles.buttonSm}>
          <Text style={styles.buttonTextSm}>Add Existing Roster</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSm}>
          <Text style={styles.buttonTextSm}>Create New Roster</Text>
        </TouchableOpacity>
      </View>
      <Text>Away Team</Text>
      <TextInput
        style={styles.input}
        placeholder="Away Team"
        placeholderTextColor="#aaaaaa"
        // label="Away Team"
        // onChangeText={(text) => setEmail(text)}
        // value={awayTeam}
      >
        {/* <Text>Away Team</Text> */}
      </TextInput>
      {/* <TouchableOpacity onPress={retrieveGames} style={styles.button}>
        <Text style={styles.buttonText}>Retrieve Games</Text>
      </TouchableOpacity>  */}
      <TouchableOpacity onPress={navigateHome} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      {/* 
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default NewGameScreen;

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
  buttonSm: {
    backgroundColor: "#0782F9",
    width: "30%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonSmWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonTextSm: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    width: "60%",
    padding: 10,
    // flex: 1,
    // border: "1px solid black",
  },
});
