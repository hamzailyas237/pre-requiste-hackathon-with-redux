

import { View, Text, Alert, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, State, TouchableOpacity } from 'react-native-gesture-handler'
import AppSwiper from '../../components/swiper/AppSwiper'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'
import { CardSkeleton } from '../../components/skeleton/CardSkeleton'
import { ProductCard } from '../../components/card/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProductsAction } from '../../store/actions/ProductActions'

const Home = () => {


  const swiperImages = [banner1, banner2, banner3, banner4, banner5, banner6]

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllProductsAction())
  }, [products])

  const { products, loader } = useSelector((state) => {
    return state.GetAllProductsReducer
  })

  

  return (

    <ScrollView>

      <AppSwiper swiperImages={swiperImages} />
      <View>
        {loader ? <CardSkeleton />
          :
          products && products.map((product, i) => {
            return <ProductCard product={product} key={i} />
          })
        }
      </View>
    </ScrollView>

  )
}

export default Home
