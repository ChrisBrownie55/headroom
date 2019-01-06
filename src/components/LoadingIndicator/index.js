import classNames from '@chbphone55/classnames';
import './style.css';

const LoadingIndicator = ({
  width,
  color,
  completeColor,
  backgroundColor,

  label = 'Loading...',
  complete = false,
  completeLabel = 'Finished loading!',
  className,
  ...props
}) => html`
  <div
    className=${classNames('loading-indicator', { 'loading-indicator__bar--complete': complete }, className)}
    style=${{
      '--width': width,
      '--color': color,
      '--complete': completeColor,
      '--background': backgroundColor
    }}
    ...${props}
  >
    <div className=loading-indicator__bar></div>
    <span className=loading-indicator__label>${complete ? completeLabel : label}</span>
  </div>
`;

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
