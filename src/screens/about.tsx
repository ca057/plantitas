import { SafeAreaView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    fontFamily: 'monospace',
  },
});

export const About = () => (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.header}>About</Text>
  </SafeAreaView>
);
