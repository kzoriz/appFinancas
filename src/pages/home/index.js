import {Text, StyleSheet, View} from "react-native";
import Header from '../../components/Header'
import Balance from "../../components/balance";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Boris Oliveira" cpf="083.349.844-48"/>
            <Balance saldo="15.000,00" gastos="-358,00"/>

            <Text style={styles.title}>Movimentações</Text>

        </View>


    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',

    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 14,
        marginLeft: 14,
        marginTop: 14,
    },

})

