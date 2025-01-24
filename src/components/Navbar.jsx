import { Link } from "react-router"
import TelegrmLogo from "../assets/Vector.png"
import search from "../assets/Vector-3.png"
import Russion from "../assets/cif_ru.png"
import Nrg from "../assets/Rectangle 3.png"

function Navbar() {
    return (
        <>
            <div className="my-Navbar pt-4 pb-4">
                <div className="container">
                    <div className="d-flex justify-content-between  align-items-center">
                        <div className="d-flex align-items-center  gap-3">
                            <Link to={'/'} className="navbar-logo">NAMAGANLIKALAR24</Link>
                            <div className="currenciec d-flex  gap-3">
                                <p className=" d-inline"><span >$</span> 10137.2</p>
                                <p className=" d-inline"> <span>P</span> 138.26 </p>
                                <p className=" d-inline"> <span >E</span> 10988.72</p>
                            </div>
                        </div>


                        <div className="d-flex  gap-3">
                            <button type="button" className="navbar-btn "><img src={search} alt="" /></button>
                            <button type="button" className="navbar-btn d-flex align-items-center gap-1"><img src={Russion} alt="" />  РУ</button>
                            <Link to="https://web.telegram.org/a/" type="button" className="navbar-telegram " ><img className="TelegrmLogo p-1" src={TelegrmLogo} alt="" /> Подписатся</Link>
                        </div>
                    </div>
                    <div className="bg-white">
                        <ul className=" navbar-links  list-unstyled d-flex justify-content-evenly py-3 mt-4">
                            <li><Link>Узбекистана</Link></li>
                            <li><Link>Мир</Link></li>
                            <li><Link>Экономика</Link></li>
                            <li><Link className="active">Политика</Link></li>
                            <li><Link>Общество</Link></li>
                            <li><Link>Технологии</Link></li>
                            <li><Link>Спорт</Link></li>
                            <li><Link> Культура</Link></li>
                            <li><Link>Происшествия</Link></li>
                            <li><Link>Туризм</Link></li>

                        </ul>
                    </div>

                    <div className="Nrg ">
                        <img className="img-fluid w-100 Nrg1" src={Nrg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar