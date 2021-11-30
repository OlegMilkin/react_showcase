import { useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import { Preloader } from './Preloader'
import { GoodsList } from './GoodsList'

import { useContext } from 'react'
import { ShopContext } from '../context'

function Shop() {
  const {goods, setGoods, loading, disableLoading} = useContext(ShopContext)

  useEffect(() => {
     fetch(API_URL, {
      headers: {
        'Authorization': API_KEY
      }
    })
      .then(response => response.json())
      .then((data) => {
        setGoods(data.shop)
        disableLoading()
      })

  },[setGoods, disableLoading])

  return (
    <main className="container content">
      {
        loading ? <Preloader/> : <GoodsList goods={goods} />
      }
    </main>
  )
}

export {Shop}