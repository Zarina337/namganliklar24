import { Link } from "react-router"
import Navbar from "./Navbar"
import Future from "./Future"
import MiniCard from "./miniCard"
import search from "../assets/Vector-3.png"
import Russion from "../assets/cif_ru.png"
import TelegrmLogo from "../assets/Vector.png"
function Contacaus() {
    return (
        <>
            <Navbar />


            <div className='container pt-3'>
                <h5>Напишите нам</h5>
                <div className="row ">
                    <div className="col-6">
                        <form className="contact-form">

                            <input placeholder="Имя" type="text" className="form-control" name="" id="" />
                            <input placeholder="Электронная почта" type="email" className="form-control" name="" id="" />
                            <input placeholder="Номер телефона" type="text" className="form-control" name="" id="" />
                            <input placeholder="Тема" type="text" className="form-control" name="" id="" />
                            <textarea maxLength={1000} rows={10} placeholder="Текст" className="form-control" name="" id=""></textarea>
                            <input type="file" className="form-control w-25" />

                            <div className="d-flex align-items-center gap-3">
                                <input type="text" placeholder="Код" className="form-control w-25 m-0" />
                                <p className="m-0 ">5 Pup suk8 64</p>

                            </div>
                            <button type="submit" className="navbar-logo1  w-25 ">Отправить</button>
                        </form>



                    </div>




                    <div className="col-6 ps-5">
                        <div className="mega-div d-flex">
                            <div>
                                <Link to={'/'} className="navbar-logo12 mt-5">NAMAGANLIKALAR24</Link>
<div className="chtoto-shadow ps-3 mx-1 d-flex justify-content-between mb-3">
<p>Электронная почта</p>
<p>info@namanganliklar24.uz</p>
</div>

<div className=" ps-3 mx-1 d-flex justify-content-between mb-2">
<p>Социальные сети</p>
    <div className="">
    <img className="mx-2" src={search} alt="" />
    <img src={Russion} alt="" />
</div>
</div>
<div className="ps-3 mx-1 d-flex justify-content-between  align-items-center mb-3 mt-3">
<p>Телеграм канал</p>
<Link to="https://web.telegram.org/a/" type="button" className="navbar-telegram " ><img className="TelegrmLogo p-1" src={TelegrmLogo} alt="" /> Подписатся</Link>
</div>

<div className="ps-3 mx-1 d-flex justify-content-between mt-4">
<p>Мобильная приложение</p>
<div>
<img src={search} alt="" />
<img src={Russion} alt="" />
</div>
</div>


                            
                        </div>
                    </div>
                 </div>
                </div>

            </div>

            <Future />


        </>
    )
}

export default Contacaus