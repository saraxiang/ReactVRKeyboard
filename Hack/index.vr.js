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
            width: 1,
            alignItems: 'stretch',
            transform: [{
                translate: [-2, 0, -5]
            }],
        },
    });
  }
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          {this.state.text}
        </Text>
        <View style={ this.styles.menu }>
          <Key
            text='q'
            callback={() => this.setState(
              (prevState) => ({
                text: prevState.text + 'q'
              }))}
          />
          <Key
            text='w'
            callback={() => this.setState(
              (prevState) => ({
                text: prevState.text + 'w'
              }))}
          />
          <Key
            text='e'
            callback={() => this.setState(
              (prevState) => ({
                text: prevState.text + 'e'
              }))}
          />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('Hack', () => Hack);
