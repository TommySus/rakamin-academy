import React, { useState,useEffect } from 'react';
import Board from './Board';


const data = [
    {
        title: 'test get 1',
        description: 'test get 1'
    },
    {
        title: 'test get 2',
        description: 'test get 2'
    },
    {
        title: 'test get 3',
        description: 'test get 3'
    },
    {
        title: 'test get 4',
        description: 'test get 4'
    },
]

function GetCardColor () {
    let baseColor = ["#01959F", "#FEEABC", "#F5B1B7","#B8DBCA"];
    let setColor = []
    data.forEach(function(item, index) {
        let color = baseColor[ index % baseColor.length ]
        setColor.push({
            borderCard: color,
            borderTitle: (color === '#01959F' ? '#4DB5BC'
                : color === '#FEEABC' ? '#FEEABC'
                : color === '#F5B1B7' ? '#F5B1B7'
                : '#B8DBCA') ,
            titleColor: (color === '#01959F' ? '#01959F'
                : color === '#FEEABC' ? '#FA9810'
                : color === '#F5B1B7' ? '#E11428'
                : '#43936C') ,
            background: (color === '#01959F' ? '#F7FEFF'
            : color === '#FEEABC' ? '#FFFCF5'
            : color === '#F5B1B7' ? '#FFFAFA'
            : '#F8FBF9') 

        });
    });
    return setColor
}


export default function Body(props) {
    const [dataColor, setDataColor] = useState([]);

    useEffect(()=>{
		setDataColor(GetCardColor())
	}, [])
    
    return (
        <div className='body'>
            <div className='body-container'>
                <Board colors={dataColor} data={data}/>
            </div>
        </div>
    );
}