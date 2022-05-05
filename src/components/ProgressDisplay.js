import React from 'react';

const ProgressDisplay = ({ progress }) => {

    console.log('this is progress', progress)
    
    
    return(
        <div className="progress-display">
            <div className="progress-bar">
                <div className="progress-indicator" style={{ width: progress + '%'}}>
                </div>
            </div>
        </div>
    )
}

export default ProgressDisplay;