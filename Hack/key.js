import React from 'react';
import {
    StyleSheet,
    Text,
    VrButton,
} from 'react-vr';

export default class Key extends React.Component {
    constructor() {
        super();
        this.state = {
          hovering: false,
          inactive: false,
        }
        this.styles = StyleSheet.create({
            text: {
                fontSize: 0.3,
                textAlign: 'center',
            },
        });
    }

    activateInABit() {
      // TODO: set timer
      this.setState(
        (prevState) => ({
          inactive: false,
        }));
    }

    onMouseOver() {
      this.setState(
        (prevState) => ({
          hovering: true,
          inactive: true,
        }));
      this.activateInABit();
      this.props.callback();
    }

    onMouseExit() {
      this.setState(
        (prevState) => ({
          hovering: false
        }));
    }

    render() {
        return (
          <VrButton
            style = {{
              transform: this.props.isClear ? [] :
                [{translate: [-2+this.props.index+this.props.row/2, -this.props.row, -2]}],
              position: 'absolute',
              minWidth: 0.7,
              margin: 0.05,
              height: 0.7,
              backgroundColor: this.state.hovering ? 'blue' : 'green',
            }}
            onEnter = {() => this.onMouseOver()}
            onExit = {() => this.onMouseExit()}
          >
            <Text style = {this.styles.text}>
              {this.props.text}
            </Text>
          </VrButton>
        );
    }
}
