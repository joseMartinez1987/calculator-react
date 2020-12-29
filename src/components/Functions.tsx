import React, {FC} from 'react'

import Button, {ButtonClickHandle} from './Button'

type Props = {
    onContentClear: ButtonClickHandle,
    onDelete:ButtonClickHandle
}


const Function: FC<Props> = ({onContentClear,onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button  text="&larr;" clickHandler={onDelete}/>
    </section>
)



export default Function