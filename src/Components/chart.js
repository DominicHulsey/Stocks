import {
  ScrollView,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {helpers} from '../helpers/calculations';
import styles from './styles';
import Svg, {Line} from 'react-native-svg';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default function Chart(props) {
  const [chartValues, setChartValues] = useState({});
  const [price, setPrice] = useState([]);
  const [isActive, setIsActive] = useState(0);
  const {verticalBuffer, contentContainerStyle} = props;
  const renderNode = (node, index) => {
    const {range, max, min, avg} = chartValues;
    const prevNode = index > 0 ? price[index - 1] : {price: avg};
    const point1 = (((prevNode.price - min) / range) * 100).toFixed(2);
    const point2 = (((node.price - min) / range) * 100).toFixed(2);
    console.log(`${point1}, ${point2}`);
    console.log(`${point1}, ${point2}`);
    return (
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          height: '100%',
        }}>
        <View
          style={{
            height: 1,
            width: '100%',
            borderRadius: 0,
            backgroundColor: 'black',
          }}></View>
        <Svg height="100%" width="100%">
          <Line
            x1="0"
            y1={`${point1}%`}
            x2="100%"
            y2={`${point2}%`}
            stroke="#45E740"
            strokeWidth="1"></Line>
        </Svg>
      </View>
    );
  };
  useEffect(async () => {
    const priceDataFull = require('../api/exampleData.json');
    const formattedPriceData = helpers.formattedPriceData(priceDataFull);
    setPrice(formattedPriceData);
    const chartContainerValues = helpers.calculateChartData(formattedPriceData);
    setChartValues(chartContainerValues);
  }, []);

  return (
    <>
      <View
        style={{
          height: screenHeight / 2,
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{color: 'white'}}>
            {chartValues.max ? chartValues.max.toFixed(2) : ''}
          </Text>
          <Text style={{color: 'white'}}>
            {chartValues.avg ? chartValues.max.toFixed(2) : ''}
          </Text>
          <Text style={{color: 'white'}}>
            {chartValues.min ? chartValues.max.toFixed(2) : ''}
          </Text>
        </View>
        <ScrollView
          minimumZoomScale={1}
          maximumZoomScale={5}
          horizontal
          contentContainerStyle={{
            height: '100%',
            borderWidth: 2,
            paddingVertical: verticalBuffer,
            backgroundColor: 'black',
            borderColor: 'white',
            borderWidth: 1,
          }}
          style={{flexDirection: 'column'}}>
          {/* {chartValues.gridLines.map(val => {
          return (
            <Svg height="100%" width="100%">
              <Line
                x1="0"
                y1={`${val / chartValues.max}%`}
                x2="100%"
                y2={`${val / chartValues.max}%`}
                stroke="grey"
                strokeWidth="1"></Line>
            </Svg>
          );
        })} */}
          {price.map((node, i) => {
            return renderNode(node, i);
          })}
        </ScrollView>
      </View>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 20,
          borderRadius: 5,
          width: '80%',
          borderColor: 'white',
          justifyContent: 'space-between',
          borderWidth: 2,
        }}>
        <TouchableOpacity
          onPress={() => {
            setIsActive(0);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 0 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            5m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(1);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 1 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            1h
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(2);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 2 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            1d
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(3);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 3 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            1w
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(4);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 4 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            1m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(5);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 5 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            3m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(6);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 6 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            1y
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsActive(7);
          }}
          style={[
            styles.timePeriodButton,
            {backgroundColor: isActive == 7 ? 'grey' : null},
          ]}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            5y
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
