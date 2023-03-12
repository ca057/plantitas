import { Text, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export const Home = () => (
  <SafeAreaView style={styles.safeArea}>
    <Text>Plantitas</Text>
  </SafeAreaView>
);
