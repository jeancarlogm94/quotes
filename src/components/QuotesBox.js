import React, {useState} from 'react';
import quotes from '../quotes.json'

const QuotesBox = () => {

    const colors = ["#190933", "#1C3144", "#70161E", "#522B47", "#462749", "#00272B", "#000022", "#002E2C", "#032B43", "#B0413E", "#6D454C", "#774C60", "#1B3B6F", "#ED6A5A", "#197BBD", "#204B57", "#14591D", "#A71D31", "#610F7F", "#09BC8A", "#FF7733", "#7B1E7A", "#61988E", "#92140C", "#080357"]

    const ramdonIndex = Math.floor(Math.random() * quotes.length)

    const [index, setIndex] = useState(ramdonIndex)

    const changeQuotes = () => {
        const ramdonIndex = Math.floor(Math.random() * quotes.length)
        setIndex(ramdonIndex)
    }

    const randomColor = Math.floor(Math.random() * colors.length)

    document.body.style = `background: ${colors[randomColor]}`

    return (
        <div className='quotes'>
           <i style={{color: colors[randomColor]}} class="fa-solid fa-quote-left"></i>
           <span style={{color: colors[randomColor]}}>{quotes[index].quote}</span>
           <i style={{color: colors[randomColor]}} class="fa-solid fa-quote-right"></i>
           <p style={{color: colors[randomColor]}}>{quotes[index].author}</p>
           <i className='icon' onClick={changeQuotes} style={{color: colors[randomColor]}} class="fa-solid fa-circle-arrow-right fa-2x"></i>
        </div>
    );
};

export default QuotesBox;