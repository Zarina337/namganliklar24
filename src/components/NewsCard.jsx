import { Link } from "react-router"
import clendarIcon from "../assets/Vector-6.png"


function NewsCard (props) {
    return(
<>
        <div className='row news-card my-3'>
  <div className='col-4'><img className='img-fluid'  src={props.img} alt="" /></div>
  <div className="col-8 d-flex justify-content-centet flex-column">
    <Link to={'/d'} className='title text-black text-decoration-none'>{props.tittle}</Link>
    <p className='calendar1'>После прорыва дамбы  Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.
    </p>
    <p className='calendar2'> <img src={clendarIcon} alt="" />  11:31 / 15.05.2020</p>
  </div>
</div >

</>

    )
}

export default NewsCard