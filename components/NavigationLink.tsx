import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string;
};

export default function NavigationLink({ label }: Props) {
    return (
        <View style={styles.linkContainer}>
            <Link style={styles.link}></Link>
        </View>
    );
}

const styles = StyleSheet.create({
    linkContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    link: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    linkIcon: {
        paddingRight: 8,
    },
    linkLabel: {
        color: '#fff',
        fontSize: 16,
    },
});
