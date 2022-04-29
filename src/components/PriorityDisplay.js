

const PriorityDisplay = ({ priority }) => {

console.log('in component')

// const setPriority = () => {
//     console.log('a new fuction')
// }

function setPriority() {
    console.log('Im in a new function?')
}


    return (
        <div className="priority-display">
            <h3 style={{color: priority >=1 ? 'rgb(253,253,150' : ''}}>§</h3>
            <h3 style={{color: priority >=2 ? 'rgb(253,253,150' : ''}}>§</h3>
            <h3 style={{color: priority >=3 ? 'rgb(253,253,150' : ''}}>§</h3>
            <h3 style={{color: priority >=4 ? 'rgb(253,253,150' : ''}}>§</h3>
            <h3 style={{color: priority >=5 ? 'rgb(253,253,150' : ''}}>§</h3>
        </div>
    )
}

export default PriorityDisplay;