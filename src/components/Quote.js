import { useState, useEffect } from 'react';
import { getZenQuotes } from '../api';

function Quote () {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(() => {
        getZenQuotes().then(({ content, author }) => {
            setText(content)
            setAuthor(author)
        }).catch((err) => {
            console.log(err);
            setText('Error: Please contact studiorach.com for assistance.')
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