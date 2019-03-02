import { Component } from "react";
import { AreaChart, Grid, LineChart, YAxis, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import React from "react";
import { View } from "react-native";


type Props = {};
export default class Chart extends Component<Props> {

    render () {
        const data = [ 3, 7, 4, 5, 2, 5, 4, 5, 7, 9, 3 ]
         
        const contentInset = { top: 10, bottom: 10 }
        return (
            <View style={{  }}>
            <LineChart
            style={{ width: 370, height: 200 }}
            data={ data }
            gridMin={ 0 }
            contentInset={ contentInset }
            curve={ shape.curveNatural }
            svg={{ stroke: '#3f51b5' }}
        >
            <Grid/>
        </LineChart>
        </View>
        );
    }


}