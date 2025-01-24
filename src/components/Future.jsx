import { Button } from "bootstrap"
import { Link } from "react-router"
import TelegrmLogo from "../assets/Vector-7.png"

function Future() {
    return (
        <>
            <div className="my-Navbar1 mt-5 pt-4 pb-4">
                <div className="container">
                    <div className="row">

                        <div className="col-12 d-flex justify-content-between  align-items-center">
                            <div className="d-flex align-items-center  gap-3">
                                <Link to={'/'} className="navbar-logo3 ">NAMAGANLIKALAR24</Link>
                            </div>


                            <div className="d-flex align-items-center gap-3">

                                <p className="p1 m-0">Подписывайтесь на наш канал в Telegram и будьте всегда в курсе самых последних новостей:</p>

                                <Link to="https://web.telegram.org/a/" type="button" className="navbar-telegram1 m-2" ><img className="TelegrmLogo1 p-1" src={TelegrmLogo} alt="" /> Подписатся</Link>
                            </div>
                        </div>




                        <div className="col-5 colors">
                            <h6>О сайте</h6>
                            <p>
                                Воспроизводство, копирование, тиражирование, распространение и иное использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного разрешения редакции.
                            </p>
                        </div>

                        <div className="col-3 colors">
                            <p> Информация о сайте </p>
                            <p>Напишите нам </p>
                            <p>Реклама </p>
                            <p>Прислать новость</p>
                        </div>

                        <div className="col-4  colors">
                            <p> Использование материалов </p>
                            <p>Темы дня  </p>
                            <p>Наша команда</p>
                        </div>

                    </div>
                </div>



            </div>

        </>

    )
}

export default Future