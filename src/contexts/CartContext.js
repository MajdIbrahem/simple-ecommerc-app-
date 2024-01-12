import {createContext,useEffect,useState} from 'react';
export const CartContext=createContext()
const CartProvider = (props) => {
  const [cart, setcart] = useState([])
  const [Items, setItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((prev, curItem) => {
        return prev+curItem.amount
      }, 0)
      setItems(amount)
    }
  },[cart])
  useEffect(() => {
    if (cart) {
      const total = cart.reduce((prev, curItem) => {
        return prev+curItem.amount*curItem.price
      }, 0)
      setTotalPrice(total)
    }
  },[cart])
  const addToCart = (product,id) => {
    const newItem = { ...product, amount: 1 }
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {...item,amount : cartItem.amount+1}
        } else {
          return item
        }
      })
      setcart(newCart)
    } else {
      setcart([...cart,newItem])
    }
  }
  const removeItem = (id) => {
    const newCart = cart.filter(item=> {
      return item.id!==id
    })
    setcart(newCart)
  }
  const clearCart =() =>{
    setcart([])
  }
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    addToCart(cartItem,id)
  }
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item,amount:cartItem.amount-1}
        } else {
          return item;
        }

      })
      setcart(newCart);

    } 
      if (cartItem.amount < 2) {
        removeItem(id)
      
    }
  }
  return <CartContext.Provider value={{addToCart,cart, setcart,removeItem,clearCart,increaseAmount,decreaseAmount,Items,totalPrice}}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
