import classNames from '@chbphone55/classnames';
import './style.css';

const LoadingIndicator = ({
  width,
  color,
  label = 'Loading...',
  complete = false,
  completeLabel = 'Finished loading!',
  className,
  ...props
}) => html`
  <div>
    <div className=${classNames('loading-indicator', className)} ...${props}></div>
    <span>${complete ? completeLabel : label}</span>
  </div>
`;

LoadingIndicator.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  complete: PropTypes.bool,
  completeLabel: PropTypes.string
};

export default LoadingIndicator;
