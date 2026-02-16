import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth } from '../config/firebase';

export default function MessageBubble({ message }) {
  const isMe = message.uid === auth.currentUser?.uid;

  return (
    <View style={[
      styles.container,
      isMe ? styles.myMessage : styles.otherMessage
    ]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '75%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  text: {
    color: '#000',
  },
});
