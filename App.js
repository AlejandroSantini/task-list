import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { CustomModal, AddTask } from './components/index.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dde7e6',
  },
  itemList: {
    marginHorizontal: 20,
  },
  itemContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8daca8',
    padding: 10,
    borderRadius: 1,
  },
  item: {
    fontSize: 16,
    color: '#4d4d4d',
  },
  delete: {
    fontSize: 20,
    color: '#4a306d',
    backgroundColor: '#f5f5f5',
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 5,
    fontWeight: '400',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: '30%',
  },
  modalMessageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMessage: {
    marginBottom: 10,
    fontSize: 16,
  },
  selectedTask: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 30,
  },
});

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleChangeText = (text) => {
    setTask(text);
  };

  const addItem = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task },
    ]);
    setTask('');
  }

  const onHandleModal = ((id) => {
    setModalVisible(!modalVisible);
    setSelectedTask(tasks.find((item) => item.id === id));
    console.log(id);
  });

  const onHandleDeleteItem = () => {
    setTasks(tasks.filter((item) => item.id !== selectedTask.id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <AddTask
        item={task}
        onChangeText={onHandleChangeText}
        placeholder='New task'
        addItem={addItem}
        textButton='ADD'
        color='#4d4d4d'
      />
      <FlatList
        style={styles.itemList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal
        visible={modalVisible}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>List Detail</Text>
        </View>
        <View style={styles.modalMessageContainer}>
          <Text style={styles.modalMessage}>{`Are you sure you want to delete?`}</Text>
        </View>
        <View style={styles.modalMessageContainer}>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Delete'
            onPress={() => onHandleDeleteItem(selectedTask?.id)}
            color='#be0a0a'
          />
          <Button
            title='Cancel'
            onPress={() => setModalVisible(!modalVisible)}
            color='#4d4d4d'
          />
        </View>
      </CustomModal>
    </View>
  );
}