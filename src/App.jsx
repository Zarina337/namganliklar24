import './assets/index.css'
import Navbar from './components/Navbar'
import virusIcon from './assets/virus.png'
import Inficirovani from './assets/emojione-monotone_face-with-medical-mask.png'
import smileIcon from './assets/cil_smile.png'
import dieIcon from './assets/Vector-5.png'
import clendarIcon from "./assets/Vector-6.png"
import NewsCard from './components/NewsCard'
import MiniCard from './components/miniCard'
import Future from "./components/Future.jsx"
function App() {

  return (
    <>
      <Navbar />

      <div className='container'>
        <div className='row subheading px-4'>
          <div className='col-3 py- d-flex justify-content-center'>
            <div className='d-flex  align-items-center gap-3'>
              <img src={virusIcon} alt="" className='img-fluid' />
              <p className='m-0'>Коронавирус COVID-19
                в Узбекистане</p>
            </div>
          </div>


          <div className='col-3 py- d-flex justify-content-center'>
            <div className='d-flex  align-items-center gap-3'>
              <img src={Inficirovani} alt="" className='img-fluid' />
              <p className='m-0'>Инфицированы
                <span>2753</span></p>
            </div>
          </div>


          <div className='col-3 py- d-flex justify-content-center'>
            <div className='d-flex  align-items-center gap-3'>
              <img src={smileIcon} alt="" className='img-fluid' />
              <p className='m-0'>Выздоровели
                2245</p>
            </div>
          </div>


          <div className='col-3 py- d-flex justify-content-center'>
            <div className='d-flex  align-items-center gap-3'>
              <img src={dieIcon} alt="" className='img-fluid' />
              <p className='m-0'>Умерли ☠️
                12</p>
            </div>
          </div>

        </div>
      </div>
      {/*  */}

      <div className='container'>
        <h4 className='mt-3'>Политика</h4>
        <div className='row '>

          <div className='col-8'>
            <NewsCard tittle="По факту прорыва Сардобинского водохранилища 
возбуждено уголовное дело"  img="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgaQ4COK8puNLcFD2R9r9rkl8wyVO-slKhPq~-wslAfqjMusTZ5x5kbN3dt-V0wysIoGiQaIWPBIihB7SmNUeBhQiO-LrBg69HOju4s3UUyBws0l4~xc22ZlUFSWFB1nWS-zpVJh7hcyQnBsh8JSzqoNAzl3U0uwGYPU4sMv6GKJEHe7q5UNQ7q3xTVhIF0czEl0MmzXuyrVc7Y2S9WgFKf15okZPhBBUFyIRi~~msKSmvYhFJJbFX2LQX0iVzpXCGCwgpWqjtny9~KHiv9dNg~K~DceLhJAbg1v9sgiZir6PCwfkpT8PbLky86~JF97wP2WlvZ43mj8ggkR3DDJzg__" />
            <NewsCard tittle="Мирзиёев: «Нам следовало бы принять некоторые правила 
карантина как часть повседневной жизни»
" img="https://s3-alpha-sig.figma.com/img/c0f3/1d6e/4008ba3214bf3516140990d3b4535a71?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czecs7vpUCxrCth6Y4GTigsju3ak2Lhfqg~JrJHc2p8pmwj7E89kcgp3F6yQqekr~iJclaTBvx6EmjFLKhhgprY7IaUsk01kKjHcuzLNA0XvrSfGe0YFDvehdo36O3BGDtaSMWDnkVaBI-zu9~KklPxAVvcY1cD3tSoHHoGo3j07PhIaUbamol--BlsbF03Qg73lmf80RLH27eLGFBw7BoZFUeyDxNxo1MaSWUq7DiW7sV2xJ0P~w61ZcNzimF5Qm-GzQuRsCwxd-LZTALvgkjiIsMPX7ZKBRM3M8aCgODgDozS4GjOEBZkM9gok46Gh-OuSBkffuupyZd47ytss4w__" />
            <NewsCard tittle="В Ташкенте планируют ввести новую систему электронных проездных билетов
" img="https://s3-alpha-sig.figma.com/img/a2e6/4bc3/dad2f19f59ada22009fde0e8a4256c23?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6FKLlKW3m0PaICEQdvK346U97fmPFs2wuM4PQo3jZW1-7N4zRu2yb~l56ybszb4I6H726dSPMRKrFny0GvrM4XurVbtyJuZl2R~V1qynQS~7Zbzl5cQZfm4bOUCNIZ5OJYw8PKPSwtjzI3tgq0WFFUYBRXZCz7m6BpzGUYQWjlctbcp03-RnFBj9T8lHegULgY2ixO~Zi2CxRL3-tOzf8~9nLTTb4ChaiAPv6iGYApMq-yMaB6umn5pJK-mbttjwSZ9QsgDBXkwe0bV5EzLBgt6TxAVYAZMwop7ZFU2dJMte2f2V0NNXb9~~Yt4c24HZKAa~NLwIdfz07SCGpSscA__" />
            <NewsCard tittle="По факту прорыва Сардобинского водохранилища 
возбуждено уголовное дело"  img="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgaQ4COK8puNLcFD2R9r9rkl8wyVO-slKhPq~-wslAfqjMusTZ5x5kbN3dt-V0wysIoGiQaIWPBIihB7SmNUeBhQiO-LrBg69HOju4s3UUyBws0l4~xc22ZlUFSWFB1nWS-zpVJh7hcyQnBsh8JSzqoNAzl3U0uwGYPU4sMv6GKJEHe7q5UNQ7q3xTVhIF0czEl0MmzXuyrVc7Y2S9WgFKf15okZPhBBUFyIRi~~msKSmvYhFJJbFX2LQX0iVzpXCGCwgpWqjtny9~KHiv9dNg~K~DceLhJAbg1v9sgiZir6PCwfkpT8PbLky86~JF97wP2WlvZ43mj8ggkR3DDJzg__" />
            <NewsCard tittle="Мирзиёев: «Нам следовало бы принять некоторые правила 
карантина как часть повседневной жизни»
" img="https://s3-alpha-sig.figma.com/img/c0f3/1d6e/4008ba3214bf3516140990d3b4535a71?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czecs7vpUCxrCth6Y4GTigsju3ak2Lhfqg~JrJHc2p8pmwj7E89kcgp3F6yQqekr~iJclaTBvx6EmjFLKhhgprY7IaUsk01kKjHcuzLNA0XvrSfGe0YFDvehdo36O3BGDtaSMWDnkVaBI-zu9~KklPxAVvcY1cD3tSoHHoGo3j07PhIaUbamol--BlsbF03Qg73lmf80RLH27eLGFBw7BoZFUeyDxNxo1MaSWUq7DiW7sV2xJ0P~w61ZcNzimF5Qm-GzQuRsCwxd-LZTALvgkjiIsMPX7ZKBRM3M8aCgODgDozS4GjOEBZkM9gok46Gh-OuSBkffuupyZd47ytss4w__" />
            <NewsCard tittle="В Ташкенте планируют ввести новую систему электронных проездных билетов
" img="https://s3-alpha-sig.figma.com/img/a2e6/4bc3/dad2f19f59ada22009fde0e8a4256c23?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6FKLlKW3m0PaICEQdvK346U97fmPFs2wuM4PQo3jZW1-7N4zRu2yb~l56ybszb4I6H726dSPMRKrFny0GvrM4XurVbtyJuZl2R~V1qynQS~7Zbzl5cQZfm4bOUCNIZ5OJYw8PKPSwtjzI3tgq0WFFUYBRXZCz7m6BpzGUYQWjlctbcp03-RnFBj9T8lHegULgY2ixO~Zi2CxRL3-tOzf8~9nLTTb4ChaiAPv6iGYApMq-yMaB6umn5pJK-mbttjwSZ9QsgDBXkwe0bV5EzLBgt6TxAVYAZMwop7ZFU2dJMte2f2V0NNXb9~~Yt4c24HZKAa~NLwIdfz07SCGpSscA__" />
            <NewsCard tittle="В Ташкенте планируют ввести новую систему электронных проездных билетов
" img="https://s3-alpha-sig.figma.com/img/a2e6/4bc3/dad2f19f59ada22009fde0e8a4256c23?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6FKLlKW3m0PaICEQdvK346U97fmPFs2wuM4PQo3jZW1-7N4zRu2yb~l56ybszb4I6H726dSPMRKrFny0GvrM4XurVbtyJuZl2R~V1qynQS~7Zbzl5cQZfm4bOUCNIZ5OJYw8PKPSwtjzI3tgq0WFFUYBRXZCz7m6BpzGUYQWjlctbcp03-RnFBj9T8lHegULgY2ixO~Zi2CxRL3-tOzf8~9nLTTb4ChaiAPv6iGYApMq-yMaB6umn5pJK-mbttjwSZ9QsgDBXkwe0bV5EzLBgt6TxAVYAZMwop7ZFU2dJMte2f2V0NNXb9~~Yt4c24HZKAa~NLwIdfz07SCGpSscA__" />
            <NewsCard tittle="По факту прорыва Сардобинского водохранилища 
возбуждено уголовное дело"  img="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgaQ4COK8puNLcFD2R9r9rkl8wyVO-slKhPq~-wslAfqjMusTZ5x5kbN3dt-V0wysIoGiQaIWPBIihB7SmNUeBhQiO-LrBg69HOju4s3UUyBws0l4~xc22ZlUFSWFB1nWS-zpVJh7hcyQnBsh8JSzqoNAzl3U0uwGYPU4sMv6GKJEHe7q5UNQ7q3xTVhIF0czEl0MmzXuyrVc7Y2S9WgFKf15okZPhBBUFyIRi~~msKSmvYhFJJbFX2LQX0iVzpXCGCwgpWqjtny9~KHiv9dNg~K~DceLhJAbg1v9sgiZir6PCwfkpT8PbLky86~JF97wP2WlvZ43mj8ggkR3DDJzg__" />
            <NewsCard tittle="Мирзиёев: «Нам следовало бы принять некоторые правила 
карантина как часть повседневной жизни»
" img="https://s3-alpha-sig.figma.com/img/c0f3/1d6e/4008ba3214bf3516140990d3b4535a71?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czecs7vpUCxrCth6Y4GTigsju3ak2Lhfqg~JrJHc2p8pmwj7E89kcgp3F6yQqekr~iJclaTBvx6EmjFLKhhgprY7IaUsk01kKjHcuzLNA0XvrSfGe0YFDvehdo36O3BGDtaSMWDnkVaBI-zu9~KklPxAVvcY1cD3tSoHHoGo3j07PhIaUbamol--BlsbF03Qg73lmf80RLH27eLGFBw7BoZFUeyDxNxo1MaSWUq7DiW7sV2xJ0P~w61ZcNzimF5Qm-GzQuRsCwxd-LZTALvgkjiIsMPX7ZKBRM3M8aCgODgDozS4GjOEBZkM9gok46Gh-OuSBkffuupyZd47ytss4w__" />

<div className='navv d-flex  justify-content-center '>
  <button className="navbar-logo1 ">Больше новостей</button>
</div>
          </div >




          <div className='col-4 '>
            <div className='row Popular-News px-2'>
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
        </div>
      </div>

     
        <Future/>
      

    </>
  )
}

export default App
