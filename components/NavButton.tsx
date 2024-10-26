import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

type Props = {
    label: string;
    icon: string;
    onPress?: () => void;
};

export default function Button({ label, icon, onPress }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Feather name={icon} size={20} color="#ffd33d" style={styles.buttonIcon} />
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 4,
    paddingVertical: 10,
    paddingLeft: 10,
    flex: 1,
    // justifyContent: 'space-between',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
    // textAlign: 'left',
  },
});
