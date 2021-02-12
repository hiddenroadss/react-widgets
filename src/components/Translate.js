import React, { useState} from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [
    {label: 'Japanese', value: 'ja'},
    {label: 'Spanish', value: 'es'},
    {label: 'English', value: 'en'},
];


const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    
    

    return (
        <React.Fragment>
             <form className="ui form">
                <div className="field">
                    <label>Write something..</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            
                <Dropdown 
                options={options} 
                label="Select Language" 
                selected={language} 
                onSelectedChange={setLanguage}
                />
            </form>
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </React.Fragment>
       
    )
}

export default Translate;
