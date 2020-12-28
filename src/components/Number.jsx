import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


let numbers = [7,8,9,4,5,6,1,2,3,0]

let renderButton = onClickNumber => {

    const renderButton = number => (
        <Button text={number.toString()} clickHandler={onClickNumber} key={number} />
    )
    return  numbers.map(renderButton)
}

const Number = ({onClickNumber}) => (
    <section className="numbers">
        {renderButton(onClickNumber)}
    </section>
)

Number.propTypes = {
    onClickNumber : PropTypes.func.isRequired
}

export default Number