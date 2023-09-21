import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, navigation} from 'react-native';
import WatchPartyCard from '../components/WacthPartyCard';

export default function WatchPartyScreen() {

return (
    <>
    <View style={styles.container}>
        <Text style={styles.yourWatchParties}>Your Watch Parties</Text>
        
        <Button style={styles.createButton}
    title="Create Watch Party"
    onPress={() => Alert.alert('This will link to Create Watch Party page soon!')}
    />
        <View style={styles.explanationBox}>
        <Text style={styles.explanationText}>Invite friends to a watch party and choose the perfect film for your night in!</Text>
        </View>
        <WatchPartyCard />
</View>
</>
)
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#1E2030"
    },
    title: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 25,
        margin: 10,
    }, explanationBox: {
        backgroundColor: "#50515e",

    },
    explanationText: {
        color: "#fff",
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop:5,
        marginBottom: 5
    },
    yourWatchParties:{
        color: "#fff",
        margin:10,
        fontSize:17,
        fontWeight: "bold"
    }
})


