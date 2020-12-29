import React, {FC} from 'react'
import PropTypes from 'prop-types'
import './Button.css'



export type ButtonClickHandle = (text:string) => void


type Props = {
    type?:string,
    text:string,
    clickHandler: ButtonClickHandle
}
const Button: FC<Props> = ({type,text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text) }>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    text:PropTypes.string.isRequired,
    type:PropTypes.string,
    clickHandler:PropTypes.func.isRequired
}


export default Button