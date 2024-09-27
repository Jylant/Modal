import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Pressable} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.modalBox}>
            <Text>This is a modal component</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close the Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    margin: 10,
    padding: 30,
    backgroundColor: '#eee',
    alignItems: 'top',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
  },
});
