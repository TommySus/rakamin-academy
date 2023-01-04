import * as React from 'react';
import checklistIcon from '../assets/checklist-100.svg'
import settingIcon from '../assets/setting.svg'

export default function Progress(props) {
    let percentage = props.percentage
    let width =  percentage === 10 ? '27px'
    : percentage === 100 ? '200px'
    : `${Math.ceil( (200 * (percentage / 100)) )}px`

    return (
        <>  
            <div className='task-card-progress'>
                <div className='progress-bar'>
                    <div className='bar'>
                        <div style={{
                                backgroundColor: percentage < 100 ? '#01959F' : '#43936C',
                                borderTopLeftRadius: '9999px',
                                borderBottomLeftRadius: '9999px',
                                borderTopRightRadius: percentage < 100 ? '0': '9999px',
                                borderBottomRightRadius: percentage < 100 ? '0': '9999px',
                                height: '100%',
                                width: width,
                            }}>
                        </div>
                    </div>

                    
                    {percentage < 100 ? 
                        (<div className='percentage-number'>
                            {percentage}%
                        </div>) : 
                        (<div style={{width: '24px', height: '100%', display:'flex', alignItems: 'center'}}>
                            <img style={{width: '16px'}} src={checklistIcon} alt="checklist icon 100%"/>
                        </div>)
                    }
                    
                    <div style={{width: '24px', height: '100%' , cursor: 'pointer'}}>
                        <img width={24} height={24} src={settingIcon} alt="setting icon"/>
                    </div>
                </div>
            </div>
        </>
    );
}