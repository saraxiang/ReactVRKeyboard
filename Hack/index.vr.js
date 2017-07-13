import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  StyleSheet,
  Text,
  View,
} from 'react-vr';
import Key from './key.js';

export default class Hack extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
    this.styles = StyleSheet.create({
        menu: {
            flex: 1,
            flexDirection: 'row',
            width: 2,
            alignItems: 'stretch',
            transform: [{
                translate: [-2, 0, -5]
            }],
        },
       clearButton: {
         width: 2,
         transform: [{
             translate: [-1.5, 1, -4]
         }],
       }
    });
  }
  makeKeys(keys, rowNumber) {
    return keys.map((obj, i) =>
      <Key
        text={obj}
        callback={() => this.setState(
          (prevState) => ({
            text: prevState.text + obj,
          }))}
        index={i}
        row={rowNumber}
        key={obj}
      />
    )
  }

  render() {
    var uKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    var mKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    var bKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={ this.styles.clearButton }>
          <Key
            text='Clear'
            callback={() => this.setState(
              (prevState) => ({
                text: ''
              }))}
            isClear='true'
          />
        </View>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'left',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
            width: 7,
          }}>
          {this.state.text}
        </Text>
        <View style={ this.styles.menu }>
          {this.makeKeys(uKeys, 0)}
          {this.makeKeys(mKeys, 1)}
          {this.makeKeys(bKeys, 2)}
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('Hack', () => Hack);
