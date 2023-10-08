import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function  Balance({saldo, gastos}){
    return(
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>SALDO</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>GASTOS</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySimbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>


        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        // // paddingTop: statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginEnd: 14,
        marginStart: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
        // paddingBottom: 44,
    },
    itemTitle: {
        fontSize: 20,
        color: '#dadada'
    },
    content:{
        // flex: 1,
        // alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center'
        // justifyContent: 'space-between'

    },
    currencySimbol: {
        color: '#dadada',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74e3c'
    }
})