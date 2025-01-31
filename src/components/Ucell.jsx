function Ucell () {
    return(
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

    )

}

export default Ucell