import React from 'react'

const MenuItem = ({item}) => {
  console.log(item)
  return (
    <div className=' w-fit mx-auto'>
        <img src={item.link} alt='menu item img' className=' w-96 h-64'></img>
        <div className=' flex bg-darkGrey justify-between px-8 py-6'>
            <h1 className='font-bold text-xl capitalize'>{item.name}</h1>
            <h3 className=''>{item.price} $</h3>
        </div>
    </div>
  )
}

export default MenuItem