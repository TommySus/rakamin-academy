import * as React from 'react';
import Header from './Header';
import Body from './Body';

export default function Page(props) {
    return (
        <div className='page'>
            <Header/>
            <Body/>
        </div>
    );
}