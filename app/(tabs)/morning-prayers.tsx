import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.comment}>
                    Upon rising from sleep:
                </Text>
                <Text style={styles.text}>
                    In the Name of the Father, and of the Son, and of the Holy Spirit. Amen.
                </Text>
                <Text style={styles.comment}>
                    Upon rising from sleep:
                </Text>
                <Text style={styles.heading}>Heading test</Text>
                <Text style={styles.comment}>
                </Text>
                <Text style={styles.text}>
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'flex-start',
        paddingVertical: 50,
    },
    scrollView: {
        marginHorizontal: 30,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    heading: {
        color: '#fff',
        fontSize: 25,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    comment: {
        color: '#ddd',
        fontSize: 18,
        fontStyle: 'italic',
        alignSelf: 'center',
        marginBottom: 10,
    }
});
