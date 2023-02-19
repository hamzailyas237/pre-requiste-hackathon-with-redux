
import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ProductCard } from '../../components/card/ProductCard'
import { CardSkeleton } from '../../components/skeleton/CardSkeleton'
import { Text } from 'native-base'
import { GetCartProductsAction } from '../../store/actions/ProductActions'
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {

  const dispatch = useDispatch()

  const { cartProducts, loader } = useSelector((state) => {
    return state.GetCartProductsReducer
  })

  useEffect(() => {
    dispatch(GetCartProductsAction())
  }, [cartProducts])

  return (
    <ScrollView>
      <View>
        {loader ? <CardSkeleton />
          :
          cartProducts && cartProducts.length != 0 ? cartProducts.map((data, i) => {
            return <ProductCard product={data.product} cart={true} cartProducts={cartProducts} key={i} />
          })
            :
            <Text textAlign='center' mt='5' fontSize='18'>Your cart is empty</Text>

        }

      </View>
    </ScrollView>
  )
}

export default Cart