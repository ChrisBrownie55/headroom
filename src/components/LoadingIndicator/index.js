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
  const labels = useTransition({
    items: complete ? completeLabel : label,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const labelList = labels.map(
    ({ item, key, props }) =>
      html`<${animated.span} key=${key} style=${props} className="loading-indicator__label">${item}</>`
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
      <div className="loading-indicator__bar"></div>
      ${labelList}
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

export default memo(LoadingIndicator);
