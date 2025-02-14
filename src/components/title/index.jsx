import style from './title.module.css'
import PropTypes from 'prop-types';

const Title = ({title}) => {

  return (
    <div className={`${style.title} ${title=="Winner"? style.blue:style.red}`}>{title}</div>
  )
}

export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired,
};