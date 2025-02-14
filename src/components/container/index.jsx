import Card from '../card/Card'
import Title from '../title'
import style from './container.module.css'

import PropTypes from 'prop-types';

const Container = ({data,user1}) => {

  
  return (
    <div className={style.main_container}>
          <Title title={"Vinner"}/>
          <p>{user1}</p>
          <div className={style.container_cards}>
          {data.map((item, index) => (
            <Card key={index} item={item}  />
          ))}
          </div>
    </div>
  )
}


export default Container
Container.propTypes = {
  data: PropTypes.array.isRequired,
  user1:PropTypes.number.isRequired
}