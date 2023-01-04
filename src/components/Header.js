import * as React from 'react';
import plusIcon from '../assets/plus-button-header.svg'

export default function Header(props) {
    return (
        <div className='header'>
            <div className='header-container'>
                <div>
                    Product Roadmap
                </div>
                <div className='header-button'>
                    <button>
                        <img src={plusIcon} alt="plus-icon-header"/>
                        Add New Group
                    </button>
                </div>
            </div>
        </div>
    );
}