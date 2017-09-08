import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
});

export default class HorizontalProgressBar extends PureComponent {

  static propTypes = {
    progress: PropTypes.number.isRequired,
    animated: PropTypes.bool,
    color: PropTypes.string,
    duration: PropTypes.number,
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    animated: true,
    color: '#7D85BE',
    duration: 500,
    style: {},
  };

  constructor(props) {
    super(props);
    const defaultStyle = {
      width: '100%',
      height: 10,
      backgroundColor: 'transparent',
    };
    this.progAnimation = new Animated.Value(props.progress);
    this.barWidthInterpolate = this.progAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    });

    this.style = Object.assign({}, defaultStyle, props.style);
  }

  componentDidUpdate(prevProps) {
    // animate on progress change
    if (prevProps.progress !== this.props.progress) {
      this.animateProgress();
    }
  }

  animateProgress = () => {
    const {
      animated,
      duration,
      progress,
    } = this.props;

    if (animated) {
      Animated.timing(this.progAnimation, {
        toValue: progress,
        duration,
      }).start();
    } else {
      this.progAnimation.setValue(progress);
    }
  }

  render() {
    return (
      <Animated.View style={this.style}>
        <Animated.View
          style={[
            styles.bar,
            {
              width: this.barWidthInterpolate,
              backgroundColor: this.props.color,
            },
          ]}
        />
      </Animated.View>
    );
  }
}
