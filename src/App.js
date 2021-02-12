import React, {useState} from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite library among engeneers',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {label: 'The shade of Blue', value: 'blue'},
    {label: 'The color Red', value: 'red'},
    {label: 'The color Green', value: 'green'}
]



const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <div className="ui container">
                <Route path="/">
                    <Accordion items={items} />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown options={options} label="Select COlor" selected={selected} onSelectedChange={setSelected} />
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
            </div>
            
        </div>
    );
}

export default App;