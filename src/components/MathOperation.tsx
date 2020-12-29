import React, {FC} from 'react'

import Button, {ButtonClickHandle} from './Button'




type Props = {
    onClickOperation:ButtonClickHandle,
    onClickEqual: ButtonClickHandle

}

const MathOperations: FC<Props> = ({onClickOperation,onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onClickEqual} />
    </section>
)


export default MathOperations

