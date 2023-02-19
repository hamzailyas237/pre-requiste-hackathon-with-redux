

import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../components/card/ProductCard'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native';
import { CardSkeleton } from '../../components/skeleton/CardSkeleton'
import { Text } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { GetWishlistProductsAction } from '../../store/actions/ProductActions'

const Wishlist = () => {

  const dispatch = useDispatch()

  const { wishlistProducts, loader } = useSelector((state) => {
    return state.GetWishlistProductsReducer
  })

  useEffect(() => {
    dispatch(GetWishlistProductsAction())
  }, [wishlistProducts])

  return (
    <ScrollView>
      <View>

        {loader ? <CardSkeleton />
          :
          wishlistProducts && wishlistProducts.length != 0 ? wishlistProducts.map((data, i) => {
            return <ProductCard product={data.product} key={i} wishlist={true} wishlistProducts={wishlistProducts} />
          })
            :
            <Text textAlign='center' mt='5' fontSize='18'>Your wishlist is empty</Text>
        }

      </View>

    </ScrollView>

  )
}
export default Wishlist