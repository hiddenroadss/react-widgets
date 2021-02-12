import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [data, setData] = useState([]);

    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [term])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
               params: {
                action: 'query',
                format: 'json',
                origin: '*',    
                list: 'search',
                srwhat: 'text',
                srsearch: debouncedTerm
               }
            });
            setData(data.query.search);
        }
        if (debouncedTerm) {
            fetchData(); 
        }      
        
    }, [debouncedTerm]);

    const renderedList = data.map( item => {
        return (
            <li className="item" key={item.pageid}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${item.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="header">{item.title}</div>
                <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>
            </li>
        );
    })
    return (
        <React.Fragment>
             <form className="ui form">
                <div className="field">
                    <label>WikiSearch</label>
                    <input 
                    type="text"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    />
                </div>      
            </form>
            <ul className="ui list">
                {renderedList}
            </ul>
        </React.Fragment>
       
    );
};

export default Search;