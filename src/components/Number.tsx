import React, {FC} from 'react'
import Button, {ButtonClickHandle} from './Button'


let numbers = [7,8,9,4,5,6,1,2,3,0]

let renderButton = (onClickNumber:ButtonClickHandle) => {

    const renderButton = (number:number) => (
        <Button text={number.toString()} clickHandler={onClickNumber} key={number} />
    )
    return  numbers.map(renderButton)
}

type Props = {
    onClickNumber: ButtonClickHandle
}

const Number: FC<Props> = ({onClickNumber}) => (
    <section className="numbers">
        {renderButton(onClickNumber)}
    </section>
)



export default Number