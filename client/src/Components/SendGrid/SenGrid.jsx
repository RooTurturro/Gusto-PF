import axios from 'axios'
import React, { useState } from 'react'

const SenGrid = () => {
    const [error, setError] = useState()
    const [sent, setSent] = useState(false)

    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')
    const [html, setHtml] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:3001/api/mail', { to, subject, text, html })
            setSent(true)
            setError(null)
        } catch (error) {
            console.log(error.response)
            setError(error.response.data)
        }
    }

    
    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input value={to} onChange={(e) => setTo(e.target.value)} placeholder='To' />
                <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Text' />
                <input value={html} onChange={(e) => setHtml(e.target.value)} placeholder='Html code' />
                <button type='submit' onSubmit={(e)=>{handleSubmit(e)}}>submit</button>
            </form>
            {error && error}
            {sent && <p>Email sent!</p>}
        </div>
    )
}

export default SenGrid