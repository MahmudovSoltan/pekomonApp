import style from './button.module.css'
import PropTypes from 'prop-types';

const StartButton = ({startButton}) => {
  return (
    <div className={style.button_container}>
      <button onClick={startButton} className={style.button}>Start Game</button>

    </div>
  )
}

export default StartButton

StartButton.propTypes = {
  startButton: PropTypes.func.isRequired,
};