import React, { useState } from 'react'

export const FoodItem = (props) => {
    const [show, setShow] = useState(false);

    return (
        <span className='col-md-3' key={props.key} onClick={() => setShow(!show)}>
            <h2>{props.key}</h2>
            <div className="card">
                <img className="card-img-top images" src={props.food.img} alt="Project" />
                <p className='text-center'><b>{props.food.name}</b></p>
                {show ? <div className="card-body">
                    <h3>comments</h3>
                    <p className="card-text">{props.food.comments}</p>
                </div> : <div></div>}
            </div>
        </span>
    )
}
