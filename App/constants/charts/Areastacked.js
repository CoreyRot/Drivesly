import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

class Areastacked extends React.PureComponent {

    render() {

        const data = [
            {
                value: 50,
                label: '$1000',
            },
            {
                value: 80,
                label: '$800',
            },
            {
                value: 40,
                label: 'Mar',
            },
            {
                value: 95,
                label: 'Apr',
            },
            {
                value: 85,
                label: 'May',
            },
            {
                value: 50,
                label: 'Jun',
            },
            {
                value: 10,
                label: 'Jul',
            },
            {
                value: 40,
                label: 'Aug',
            },
            {
                value: 95,
                label: 'Sept',
            },
            {
                value: 10,
                label: 'Oct',
            },
            {
                value: 95,
                label: 'Nov',
            },
            {
                value: 10,
                label: 'Dec',
            },
        ]


        return (
            <SafeAreaView style={{ flexDirection: 'row', height: 700, paddingVertical: 16, }}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                />
                
                <BarChart
                    style={{ flex: 1, marginLeft: 8 }}
                    data={data}
                    vertical={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    
                    <Grid direction={Grid.Direction.HORIZONTAL}/>
                </BarChart>

            </SafeAreaView>

        )
    }
}

export default Areastacked
