import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'
 // khai báo cho input
const Input = ({ name, placeholder, type, value, onChange, className, style }) => {
    return (
        <input
            className={`${styles.input} ${className}`}
            style={style}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    )
}

Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
Input.defaultProps = {
    value: '',
    onChange: () => { },
}

export default Input;