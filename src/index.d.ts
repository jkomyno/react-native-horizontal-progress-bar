/**
 * Type definitions for react-native-horizontal-progress-bar
 * Project: https://github.com/jkomyno/react-native-horizontal-progress-bar
 * Definitions by: Alberto Schiabel <https://github.com/jkomyno>
 */

import { PureComponent } from 'react';
import { ViewPropTypes } from 'react-native';

export interface HorizontalProgressBarProps {
  /**
   * Current progress of the <ProgressBar /> component
   */
  progress: number,
  /**
   * If set to false, the animation will be disabled
   * 
   * Default is true
   */
  animated?: boolean,
  /**
   * Background color of the progress bar
   * 
   * Default is '#7D85BE'
   */
  color?: string,
  /**
   * Duration of the transition between the current progress and the next one.
   * Considered only if animated === true
   * 
   * Default is 500
   */
  duration: number,
  /**
   * Style of the ProgressBar container View
   */
  style?: ViewPropTypes.style,
}

export default class HorizontalProgressBar extends PureComponent<HorizontalProgressBarProps, null> {}
