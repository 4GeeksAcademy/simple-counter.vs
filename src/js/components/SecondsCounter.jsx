import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function SecondsCounter({ seconds }) {
  return (
    <div className="BigCounter">
      <div className="Calendar">
        <FontAwesomeIcon icon={faClock}/>
      </div>
      <div className="digit">{Math.floor(seconds / 100000) % 10}</div>
      <div className="digit">{Math.floor(seconds / 10000) % 10}</div>
      <div className="digit">{Math.floor(seconds / 1000) % 10}</div>
      <div className="digit">{Math.floor(seconds / 100) % 10}</div>
      <div className="digit">{Math.floor(seconds / 10) % 10}</div>
      <div className="digit">{Math.floor(seconds / 1) % 10}</div>
    </div>
  );
}

export default SecondsCounter;
