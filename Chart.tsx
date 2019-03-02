import { Component } from "react";
import { AreaChart, Grid, LineChart, YAxis, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import React from "react";
import { View } from "react-native";


type Props = {};
export default class Chart extends Component<Props> {

    render() {
        const data = [3, 7, 4, 5, 2, 5]
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        const axesSvg = { fontSize: 10, fill: 'grey' };
        const xAxisHeight = 30

        const contentInset = { top: 10, bottom: 10 }
        return (
            <View style={{ height: 200, padding: 10, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={contentInset}
                    svg={axesSvg}
                    numberOfTicks={5}
                    formatLabel={value => `${value}`}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1, height: 200, marginLeft: 5 }}
                        data={data}
                        gridMin={0}
                        contentInset={contentInset}
                        curve={shape.curveNatural}
                        svg={{ stroke: '#3f51b5' }}
                    >
                        <Grid />
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(index, value) => value}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        );
    }


}