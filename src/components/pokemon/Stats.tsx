import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { capitalize, map } from 'lodash'
import { IStats } from '../../models/pokemonDetail'

const Stats = ({ stats }: IStats) => {

    const barStyle = (num: number) => {

        const color = num > 49 ? '#00ac17' : '#ff3e3e'
        return {
            backgroundColor: color,
            width: `${num}%`
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {map(stats, (item, index) => (
                <View key={index} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
                    </View>
                    <View style={styles.blockInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                        <View style={styles.bgBar}>
                            <View style={[styles.bar, barStyle(item.base_stat)]}></View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Stats

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    blockTitle: {
        width: '35%',
    }, statName: {
        fontSize: 14,
        color: '#6B6B6B',
        fontWeight: '600',
    },
    blockInfo: {
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        width: '12%',
        fontSize: 12
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%', 
        height: 5,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bar: {
        height: 5,
        borderRadius: 20
    }
});