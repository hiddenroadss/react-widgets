import React, { useState } from 'react';


const Accordion = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const onTitleClick = (index) => {
        setCurrentIndex(index);
    }

    const renderItems = () => {
        return items.map( (item, index) => {
            const active = currentIndex === index ? 'active' : '';
            return (
                <React.Fragment key={index}>
                    <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                        <i className="dropdown icon" />
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        {item.content}
                    </div>
                </React.Fragment>
            );
        })
    }

    return (
        <div className="ui styled accordion">
            {renderItems()}
        </div>
    );
}

export default Accordion;