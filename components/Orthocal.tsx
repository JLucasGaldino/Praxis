import React, { useState, useEffect, Suspense } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const API_URL = 'https://orthocal.info/api/gregorian';

function Loading() {
    return (
        <Text>Loading...</Text>
    );
}

const Orthocal = () => {
    const today = new Date(2025, 3, 20);
    const dayOne = new Date(2024, 8, 28);
    const diffTime = Math.abs(today - dayOne);
    const dateIndex = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const orthoUrl = `https://orthocal.info/api/gregorian/${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}/`
    const praxisApiUrl = `https://praxis-prayers-default-rtdb.europe-west1.firebasedatabase.app/VCALENDAR/0/VEVENT/${dateIndex}.json`

    //Create dayID



    const [data, setData] = useState([]);
    const [abbrReadings, setAbbrReadings] = useState([]);

    const [date, setDate] = useState([]);
    const [fastLevel, setFastLevel] = useState([]);
    const [commemorations, setCommemorations] = useState([]);
    const [readings, setReadings] = useState([]);
    const [tester, setTester] = useState([]);

    useEffect(() => {
        fetchData();
        fetchDate();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(orthoUrl);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchDate = async () => {
        try {
            const response = await axios.get(praxisApiUrl);
            setDate(response.data);

            const fullDescription = response.data.DESCRIPTION;

            // Separators
            const firstSeparator = fullDescription.search(/\\n\\n/) //Separates fast level from the rest

            const fastDescription = fullDescription.slice(0, firstSeparator);
            if (fastDescription === 'Jejum') {
                setFastLevel("Jejum completo");
            } else if (fastDescription === 'Sem Jejum') {
                setFastLevel("Sem Jejum")
            } else {
                setFastLevel("Erro");
            }

            const lastSeparator = fullDescription.length - fullDescription.split("").reverse().join("").search(/n\\n\\/); //Separates link at the end from the rest
            const commemorationsAndReadingsDescription = fullDescription.slice(firstSeparator + 4, lastSeparator - 4);
            const beforeLastSeparator = commemorationsAndReadingsDescription.length - commemorationsAndReadingsDescription.split("").reverse().join("").search(/n\\n\\/);

            const readingsDescriptionUnprocessed = commemorationsAndReadingsDescription.slice(beforeLastSeparator);
            const commemorationsDescriptionUnprocessed = commemorationsAndReadingsDescription.slice(0, beforeLastSeparator - 4);

            let commemorationsDescriptionArray = [];
            commemorationsDescriptionArray.push(commemorationsDescriptionUnprocessed);
            while (commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].search(/\\n\\n/) !== -1) {
                let separatorIndex = commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].search(/\\n\\n/);
                let firstCommemorations = commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].slice(0, separatorIndex);
                let nextCommemorations = commemorationsDescriptionArray[commemorationsDescriptionArray.length - 1].slice(separatorIndex + 4);
                commemorationsDescriptionArray.pop();
                commemorationsDescriptionArray.push(firstCommemorations);
                commemorationsDescriptionArray.push(nextCommemorations);
            }

            setCommemorations(commemorationsDescriptionArray.join(" • "));


            // Processing readings
            let readingsDescriptionArray = [];
            readingsDescriptionArray.push(readingsDescriptionUnprocessed);
            while (readingsDescriptionArray[readingsDescriptionArray.length - 1].search(/\\n/) !== -1) {
               // Create an empty array outside. While not true, remove and push first part into an array of strings. Continue with remnant. Repeat.
                //Replace reading description by while lastelement of array has /\\n/
                let separatorIndex = readingsDescriptionArray[readingsDescriptionArray.length - 1].search(/\\n/);
                let firstReadings = readingsDescriptionArray[readingsDescriptionArray.length - 1].slice(0, separatorIndex);
                let nextReadings = readingsDescriptionArray[readingsDescriptionArray.length - 1].slice(separatorIndex + 2);
                readingsDescriptionArray.pop();
                readingsDescriptionArray.push(firstReadings);
                readingsDescriptionArray.push(nextReadings);

            }
            setReadings(readingsDescriptionArray.join(", "));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.container}>
                <Text style={styles.title}>Making API Requests</Text>
                <Text style={styles.title}>{String(today)}</Text>
                <Text style={styles.title}>{String(dayOne)}</Text>
                <Text style={styles.title}>{String(dateIndex)}</Text>
                <Text style={styles.title}>JEJUM</Text>
                <Text style={styles.title}>{String(fastLevel)}</Text>
                <Text style={styles.title}>COMEMORACOES</Text>
                <Text style={styles.title}>{String(commemorations)}</Text>
                <Text style={styles.title}>LEITURAS</Text>
                <Text style={styles.title}>{String(readings)}</Text>
                <Text style={styles.title}>TESTE</Text>
                <Text style={styles.title}>{String(date.DESCRIPTION)}</Text>
                <Text style={styles.title}>{String(data.summary_title)}</Text>
                <Text style={styles.title}>{String(data.feast_level_description)}</Text>
                <Text style={styles.title}>{String(data.fast_level_desc)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:70,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
    },
});

export default Orthocal;
