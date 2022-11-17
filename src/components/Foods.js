import React from 'react'
import { FoodItem } from './FoodItem'
export const Foods = (props) => {
    return (
        <>
            <div className='container py-3'>
                <marquee className='text-center' scrollamount="12"><h3>See Foods available at our Restaurant</h3></marquee>
                <div className='row'>
                    {
                        props.foods.map((food) => {
                            return <FoodItem  key={food.sno} food = {food} />
                        })
                    }
                </div>
            </div>

        </>

    )
}
