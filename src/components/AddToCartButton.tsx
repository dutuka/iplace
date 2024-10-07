'use client'

<<<<<<< HEAD
=======

>>>>>>> master
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/payload-types'
<<<<<<< HEAD
=======
import { toast } from 'sonner'

>>>>>>> master

const AddToCartButton = ({
  product,
}: {
  product: Product
}) => {
<<<<<<< HEAD
  const { addItem } = useCart()
=======
  const { items, addItem } = useCart()
>>>>>>> master
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

<<<<<<< HEAD
  return (
    <Button
      onClick={() => {
        addItem(product)
        setIsSuccess(true)
=======
  const handleAddToCart = () => {
    //Verify if the item is in the cart
    const isProductInCart = items.some((item) => item.product.id === product.id);

    if (!isProductInCart) {
      //If not, the item can be added. Also show a toast.
      addItem(product);
      setIsSuccess(true);
      toast.success(`Item added to cart!` );
    } else {
      //If the item is already in the cart, then it won't be added. Also show a toast.
      toast.info('Article already in cart!');
    }
  };

  return (
    <Button
      onClick={() => {
        handleAddToCart()
>>>>>>> master
      }}
      size='lg'
      className='w-full'>
      {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
<<<<<<< HEAD
=======
    
>>>>>>> master
  )
}

export default AddToCartButton