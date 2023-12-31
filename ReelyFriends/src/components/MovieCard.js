import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";
import { getPoster } from "../api/Apicall";
import MovieDetail from "./MovieDetail";

const MovieCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieCardClick = (item) => {
    setSelectedMovie(item);
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={() => handleMovieCardClick(item)}>
        <ImageBackground
          style={styles.container}
          source={{ uri: getPoster(item.poster_path) }}
        ></ImageBackground>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <MovieDetail
          movie={selectedMovie}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 140,
    width: 110,
    elevation: 5,
    marginVertical: 20,
    marginBottom: 40,
    marginHorizontal: 10,
    shadowColor: "#08080C",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
   
  },
});

export default MovieCard;
