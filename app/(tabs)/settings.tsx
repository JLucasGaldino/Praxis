import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useLanguage } from '@/constants/LanguageContext';

const Settings = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Language</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
          dropdownIconColor='#fff'
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Português" value="pt" />
        </Picker>
      </View>
      <Text style={styles.text}>Hello. The chosen language is {language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25292e',
    justifyContent: 'flex-start',
    paddingVertical: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  pickerContainer: {
    width: 200,
  },
});

export default Settings;
