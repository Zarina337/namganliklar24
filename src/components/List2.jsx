import { Link } from "react-router"
import Navbar from "./Navbar"
import Future from "./Future"
import MiniCard from "./miniCard"
function List2() {
    return (
        <>
            <Navbar />

            <div className='container'>
                <div className='row '>
                    <div className='col-8'>
                        <div className="mt-5 ">
                            <img src="https://s3-alpha-sig.figma.com/img/0a27/480d/c5dbb1173a65f197dad7b1895e717f8e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lLZmG2WLpaBqvM2vTxJRdocQ~6Ev-df3zn4TNVJOGqr3Xr41bTIXIkLbmK~TvzcrjsJ~syvyvjaE5WCfJ0ephihI9bCCm4oNLAemmRbL3PkwJLO9W2kY7eKa~JKHv6dG68stVzrJ2MbtUwXp1Y6N~bFFSfYgCXGv-YPZOYdJvbw92k70ZGbuQEQ4VvuivIla~csZ2hXstD2lOHnb840kQ-jberVHzdq7tCYyUnc0FASEH2DDsTQKBOWbZYpjPlp7hA3M0eCLzAijXnYF6bu08GqToCZxUbv1uy-kDDfM6XpEQJlY7nosgS63IXZR64uKWYupTYPqfHLBKP165bMPRQ__" alt="" />
                        </div >

                        <div className="mt-4 pe-5">

                            <h5>19 мая состоялось видеоселекторное совещание, посвященное дополнительным мерам поддержки предпринимательства.</h5>

                            <p className="pp2">

                                По данным пресс-службы главы государства, из-за пандемии в Узбекистане число бедных и безработных увеличится, а доходы семей уменьшатся. На совещании обсуждены дополнительные меры и приоритетные задачи в этом направлении.<br /><br />

                                Прежде всего, серьезное внимание уделено обеспечению гарантий прав предпринимателей и неприкосновенности их имущества.<br /><br />

                                <b>«Предупреждаю всех хокимов. Если имущество хоть одного предпринимателя будет изъято незаконно, хоким одной лишь отставкой не отделается, но и ответит перед законом», - подчеркнул Шавкат Мирзиёев.<br /></b><br />

                                Компетентным ведомствам даны указания усилить ответственность за нарушение неприкосновенности собственности, обеспечить полноценное исполнение решений суда о компенсации имущества предпринимателей.<br /><br />

                                Согласно поручению президента деловая активность в каждом районе и городе будет анализироваться на ежемесячной основе.<br /><br />

                                Бизнес-омбудсман будет вносить правительству информацию о хокимах районов и городов, которые допускают нарушения прав и неприкосновенности собственности предпринимателей.<br /><br />

                                Кабинетом Министров будет рассматриваться вопрос о соответствии должности хокимов городов и районов, которые не решают проблемы предпринимателей и не работают с ними в достаточной мере.<br /><br />
                            </p >
                            <Link className="pupsik-p">#хоким </Link>
                            <Link className="pupsik-p">#ШавкатМирзиёев   </Link>
                            <Link className="pupsik-p"> #пандемия  </Link>
                        </div>

                    </div >

                    <div className='col-4 '>
                        <div className='row Popular-News px-2 mt-3'>
                            <h5>Cамые популярные новости</h5>
                            <div className='col-12 pupsik-card'><p className='tittle'>По факту прорыва Сардобинского водохранилища
                                возбуждено уголовное дело</p><p className='date'>11:31 / 15.05.2020</p></div>

                            <div className='mini-hr px-3 mb-3'><hr /></div>
                            <MiniCard />
                            <div className='mini-hr px-3 mb-3'><hr /></div>
                            <MiniCard />
                            <div className='mini-hr px-3 mb-3'><hr /></div>
                            <MiniCard />

                        </div>

                        <div className='row mt-3'>
                            <img className='img-fluid ' src="https://s3-alpha-sig.figma.com/img/f425/6361/5c3e7b3ae97f5b851e71ea7298161b29?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bo5HssLuE5CDjIk~YECfnZGf6wj9m5UivhiCFa2UtfpnKdHO2Pxof5jXybTfl5atiC-7Pk~5vGhFfWY1eKqQLDyBy3qj3jYMvNr52u~iQHXRlZwXjHi3Sa80Y567y7967OJ1N~WpVKbAdKjnMPMAJIuTDTLZkKKunOw9MPRl5THrPIQLPp3xRNVcA928sUlZt4SxCGxdLBpV47cmyUdlbMm-fTyNi0tsY~wQ7lWyczUXM6NtdaIY0x~K7imN5EOwwvZ4-MxmaHggu8DHAxdTeC3xp4YJl0rGSt08el0XBQgMtih5LichvablpnQV~8kqjP7a3DLmixJfoooZpW6GPg__" alt="" />
                        </div>


                    </div>
                    <div className='mini-hr px-3 mt-3'><hr /></div>
                </div>
                {/*  */}

                <div className="topic-news">
                    <div className="row d-flex ">
                        <h4 className="mt-4">Новости по теме</h4>

                        <div className='col-4 pupsik-card'>
                            <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/7ffc/1544/c0ca4ca1969dfadbe1de9b2c82ce4968?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lWaheOxsM4hypGI8IocnYzMVajT5wWBHzxtdNJBjAmoT8a2NTB0RtwftxNSowg~UjMaTQ~sfo0jyvdUIf1lmwT-~1Pn-b8dWdJgiu554g5vAa6M1MZDyUnYosBYW24z-3DnubkyQkvC2VftBDf--Uy2YjXRNgcyRQAl7k--gqQ0H4Y8-rjRBkDfJI0-4pHRbyUA636pSVX--r02Y1zx32qZc4vSQ0Y7-MgI0G-X9IY6FxnPtxzea1ZIRXLiqI-07NIpPiK6smdBZ2~3sLG~Ogq4tHDeIpZkYylUksBEqm-zeJ6zufIo0VpSPj77IZxitNrMxw1Ssjbv5HuAuI7mfqQ__" alt="" />
                            <h5 className='tittle mt-3'>Мирзиёев рассказал, зачем было построено
                                Сардобинское водохранилище</h5>

                            <p className='date mt-2'>05:28 / 16.05.2020</p></div>


                        <div className='col-4 pupsik-card'>
                            <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/9459/3890/8f7b4217849880d16c207ac619eaddd8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KZGrFzXjjnVsg9yBCwIY0eNHt064KC5O5HZC5-ObliMlFwlaNLWG3zbVTnkFmFmN40PFjIWzf5Wcs7MWt0RkzjrJf9Sr1jqSFBGBUq4FsHmnr7~g4TvIar9OOPo6c3GzIBMfU0-f2dyCfSjyqyuIMJ~39RIrhd5J8cObGmfNfs2Q6tM~a0ONTqQPVxKyRqb-yGfyfUTaHn5fnDXSkJbdM3Dkx8fvy2KRwSI-K~MtFESVfHUyY2sEbOZBBtydRPoOXdpcyJeZgepJuZv0YfVwc4F-JHg9oy8wZnedAOLUvvtVjdDgtEnlCrbFE1KSNpW0r0GiE22AVA5NVBbGvY6VaA__" alt="" />
                            <h5 className='tittle mt-3'>Карантин в Узбекистане продлен до 1 июня</h5>

                            <p className='date mt-2'>05:28 / 16.05.2020</p></div>


                        <div className='col-4 pupsik-card'>
                            <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/2a4c/0670/fd86e76ab2f4f24c8574668c971a98bc?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k7le7hiEVZeH4GYZ1Uw0gQ3yTFF8cWoDYsNM834ylU7cBSNzNznGwdqGjtk1UMiirNrd6pxJ6V410zedhNtAiGFi-6YMxc8b1nKRtqJWXh8JvwSDZoC2ytfUCJrIr5lzxNVsPP356SRvMp3uuQEIQ2XtCF3R1V0ri~5qCSjSPNY6faugUu8HtQPnCO2E1dWW~2IDaAJSajJjZO4L3NqPVqXVy2PIq-EEpRkDrDs~mQ0qsAKpCmXWtR1YNJjjbnO314zL6gXKP3qUkg2PoF5iq~UaIheCYT3TvwFcCSh4q2BW-cPN2dojf1y-Curd8QAH6ICmITrVsK87cEalHtXPVA__" alt="" />
                            <h5 className='tittle mt-3'>Обмелевшая Сардоба: стихия или
                                человеческий фактор?</h5>

                            <p className='date mt-2'>05:28 / 16.05.2020</p></div>

                    </div>
                </div>
            </div>


<Future/>



        </>
    )
}

export default List2