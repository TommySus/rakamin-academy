import * as React from 'react';
import CardTask from './CardTask';

const data = [
    {
        name: 'test 1',
        todo_id: 1, 
        progress_percentage: 100
    },
    {
        name: 'test 2',
        todo_id: 2, 
        progress_percentage: 20
    },
    {
        name: 'test 3',
        todo_id: 3, 
        progress_percentage: 30
    },
]

export default function Board(props) {
    return (
        <>
            {props.colors.map((card, i) =>
                <div key={i} className='card-group' style={{ 
                    background: card.background,
                    border: `1px solid ${card.borderCard}`,
                    marginRight: ((i + 1) === props.colors.length) ? 0 : '16px'
                }}>
                    <div className='title-card-group' style={{
                        background: card.background,
                        border: `1px solid ${card.borderTitle}`,
                        color: card.titleColor
                    }}>
                        {props.data[i].title}
                    </div>
                    <div className='description-card-group'>
                        {props.data[i].description}
                    </div>
                    <CardTask data={data}/>
                </div>
            )}
        </>
    );
}