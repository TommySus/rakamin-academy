import * as React from 'react';
import Progress from './Progress';

export default function CardTask(props) {
    console.log(props,'task')
    return (
        <>  
            {props.data.map((task, i) =>
                <div key={i} className='task-card'>
                    <div className='task-card-name'>
                        Re-designed the zero-g doggie bags. No more spills!
                    </div>
                    <div className='separate-line-task-card'/>
                    <Progress percentage={props.data[i].progress_percentage}/>
                </div>
            )}
        </>
    );
}