import {Text, StyleSheet, View, FlatList } from "react-native";
import Header from '../../components/Header'
import Balance from "../../components/balance";
import Movements from "../../components/Movements";

const list = [
    {
        id:1,
        label: "Boleto conta de luz",
        value: "125,00",
        date: "12/10/2023",
        type: 0 //despesas
    },
    {
        id:2,
        label: "Boleto conta de agua",
        value: "25,00",
        date: "18/10/2023",
        type: 0 //despesas
    },
    {
        id:3,
        label: "Pix Cliente",
        value: "200,00",
        date: "29/10/2023",
        type: 1 //receita
    },

]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Boris Oliveira" cpf="083.349.844-48"/>
            <Balance saldo="15.000,00" gastos="-358,00"/>

            <Text style={styles.title}>Movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Movements data={item}/>}
            />
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
        marginBottom: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }

})
//comment new branch
