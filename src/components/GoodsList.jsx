import { GoodsItem } from './GoodsItem'

function GoodsList(props) {
  const {goods = []} = props

  return (
    <div className='goods'>
      {
        goods.map((item) => (<GoodsItem {...item} key={item.mainId}/> ))
      }
    </div>
  )
}

export { GoodsList }