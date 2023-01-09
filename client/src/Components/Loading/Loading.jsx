import React from 'react'
import spinner from '../../assets/sample.gif'


const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={spinner} alt='loading' />
        </div>
    )
}

export default Loading