import { useTransition, animated } from 'react-spring/hooks.cjs';

import classNames from '@chbphone55/classnames';
import './style.css';

const LoadingIndicator = ({
  width,
  color,
  completeColor,
  backgroundColor,

  label = 'Loading...',
  complete = false,
  completeLabel = 'Finished loading',
  className,
  ...props
}) => {
  const transition = useTransition(complete, p => p, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const theLabel = transition.map(
    ({ item, key, props }) => html`
      <${animated.span} key=${key} style=${props} className="loading-indicator__label">${item ? completeLabel : label}</>
    `
  );

  return html`
    <div
      className=${classNames('loading-indicator', { 'loading-indicator--complete': complete }, className)}
      style=${
        {
          '--width': width,
          '--color': color,
          '--complete': completeColor,
          '--background': backgroundColor
        }
      }
      ...${props}
    >
      <div className="loading-indicator__bar" />
      ${theLabel}
    </div>
  `;
};

LoadingIndicator.propTypes = {
  // style
  width: PropTypes.string,
  color: PropTypes.string,
  completeColor: PropTypes.string,
  backgroundColor: PropTypes.string,

  // functionality
  label: PropTypes.string,
  complete: PropTypes.bool,
  completeLabel: PropTypes.string,
  className: PropTypes.any
};

export default LoadingIndicator;
