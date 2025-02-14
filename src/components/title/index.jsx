import style from './title.module.css'
import PropTypes from 'prop-types';

const Title = ({title}) => {
  return (
    <div className={style.title}>{title}</div>
  )
}

export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired,
};