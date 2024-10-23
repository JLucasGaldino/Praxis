import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

/*
   /Pseudocode
   /
   /There are two in the tabs to begin. Home, and setting.
   /Later there will be more for prayers which are not of the day
   /You will be able to click on top to change the date.
   /To start, create settings page and home page
   /Add to home a button to go to a calendar and change days
   /*/

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="morning-prayers" style={styles.button}>
        Morning Prayers
      </Link>
      <Link href="evening-prayers" style={styles.button}>
        Evening Prayers
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
