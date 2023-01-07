import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../redux/actions'


const Detail = () => {
    const { id } = useParams()
    const product = useSelector((state) => state.detail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])
    return (
        <div>

        </div>
    )
}

export default Detail