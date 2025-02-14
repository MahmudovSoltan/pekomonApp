import PropTypes from 'prop-types';
import style from './card.module.css'
const Card = ({item}) => {
  const {name,type,base_experience,id}=item
  let fixId = id.toString().padStart(3,"0")

  
   
  return (
    <div>
      <div className={style.card_container}>
        <h1 className={style.card_title}>
          {name}
        </h1>
        <div>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fixId}.png`} alt="" />
        </div>
        <h2 className={style.card_type}>
        Type: {type}
        </h2>
        <p className={style.card_type}>EXP {base_experience}</p>
        <button className={style.card_btn}>Read More</button>
      </div>

    </div>
  )
}





export default Card

Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base_experience: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};