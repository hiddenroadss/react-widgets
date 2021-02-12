import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({text, language}) => {

    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: process.env.REACT_APP_TRANSLATE_KEY
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation()
    }, [debouncedText, language]);

    return (
        <div>
            <h1 className="ui header"> {translated} </h1>
        </div>
    );
}

export default Convert;
