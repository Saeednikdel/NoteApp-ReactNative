import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Text, IconButton, TextInput, FAB } from "react-native-paper";

function AddNotes({ navigation }) {
  const [noteTitle, setNoteTitle] = useState(
    navigation.state.params.title ? navigation.state.params.title : ""
  );
  const [noteDescription, setNoteDescription] = useState(
    navigation.state.params.description
      ? navigation.state.params.description
      : ""
  );

  function onSaveNote() {
    navigation.state.params.delete
      ? navigation.state.params.updateNote(navigation.state.params.id, {
          noteTitle,
          noteDescription,
        })
      : navigation.state.params.addNote({ noteTitle, noteDescription });
    navigation.goBack();
  }
  function onDeleteNote() {
    navigation.state.params.deleteNote(navigation.state.params.id);
    navigation.goBack();
  }
  return (
    <>
      <View style={styles.container}>
        <TextInput
          label="Note Title"
          value={noteTitle}
          mode="flat"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Note Description"
          value={noteDescription}
          onChangeText={setNoteDescription}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />

        <FAB
          style={styles.fab}
          // small
          icon="check"
          label="save"
          disabled={noteTitle == "" ? true : false}
          onPress={() => onSaveNote()}
          color="#fff"
        />

        {navigation.state.params.delete && (
          <FAB
            style={styles.fabDel}
            // small
            icon="close"
            label="delete"
            onPress={() =>
              Alert.alert(
                "Delete",
                "Do you want to Delete this note",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  { text: "Delete", onPress: () => onDeleteNote() },
                ],
                { cancelable: true }
              )
            }
            color="#fff"
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#219653",
  },
  fabDel: {
    position: "absolute",
    margin: 20,
    left: 0,
    bottom: 0,
    backgroundColor: "#f44336",
  },
});

export default AddNotes;
