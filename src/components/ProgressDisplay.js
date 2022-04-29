const ProgressDisplay = ({ progress }) => {

    console.log('this is progress', progress)
    
    return(
        <div className="progress-display">
            <div className="progress-bar">
                <div style={{ width: progress + '%'}}>
                    {progress}
                </div>
            </div>
        </div>
    )
}

export default ProgressDisplay;