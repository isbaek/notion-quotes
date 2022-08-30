import { useState, useEffect } from 'react';
import { getZenQuotes } from '../api';

function Quote () {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(() => {
        getZenQuotes().then(({ content, author }) => {
            setText(content)
            setAuthor(author)
        })
    }, [])
    return (
        <div className='quote'>
            <h1>{text}</h1>
            <p>— {author}</p>
        </div>
    )
}

export default Quote;