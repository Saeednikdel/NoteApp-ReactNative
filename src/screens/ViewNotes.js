import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { addnote, deletenote, updatenote } from "../reducer/notesApp";

function ViewNotes({ navigation }) {
  // const [notes, setNotes] = useState([])
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNote = (note) => {
    dispatch(addnote(note));
  };
  const updateNote = (id, note) => {
    dispatch(updatenote(id, note));
  };

  const deleteNote = (id) => dispatch(deletenote(id));

  // const addNotes = note => {
  //     note.id = notes.length + 1
  //     setNotes([...notes, note])
  // }

  return (
    <>
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any Notes</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <List.Item
                title={item.note.noteTitle}
                description={item.note.noteDescription}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
                onPress={() =>
                  navigation.navigate("AddNotes", {
                    deleteNote,
                    updateNote,
                    title: item.note.noteTitle,
                    description: item.note.noteDescription,
                    id: item.id,
                    delete: true,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}

        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add"
          onPress={() =>
            navigation.navigate("AddNotes", {
              addNote,
            })
          }
        />
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
    fontSize: 20,
  },
  fab: {
    backgroundColor: "#219653",
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
});

export default ViewNotes;