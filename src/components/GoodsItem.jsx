function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets
  } = props
  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets.background || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZdSldK-8V7J6YRvGarQcFxCtS611RC5KoQ&usqp=CAU'} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{ displayName }</span>
        <p>
          { displayDescription }
        </p>
      </div>
      <div className="card-action">
        <button className='btn'>Buy</button>
        <span className='right'>{price.finalPrice}</span>
      </div>
    </div>
  )
}

export { GoodsItem }