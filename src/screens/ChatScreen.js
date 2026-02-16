import React, { useRef, useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import useMessages from '../hooks/useMessages';
import { sendMessage } from '../services/chatService';
import MessageBubble from '../components/MessageBubble';

export default function ChatScreen() {
  const messages = useMessages();
  const [text, setText] = useState('');
  const flatListRef = useRef(null);

  const handleSend = async () => {
    await sendMessage(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageBubble message={item} />}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginRight: 10,
  },
});
