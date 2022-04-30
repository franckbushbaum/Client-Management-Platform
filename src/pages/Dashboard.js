import TicketCard from "../components/TicketCard";

const Dashboard = () => {

    const data = [

        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Ania Kubow',
            avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showcasing how to work with NFTs safely',
            timestamp: '2022-02-11T1700'
        },
        {
            category: 'Q1 2022',
            color: 'blue',
            title: 'Project531',
            owner: 'Franck Bushbaum',
            avatar: 'https://avatars.githubusercontent.com/u/85256606?s=400&u=70714125f4867b247e816cd9c656485e3515c48e&v=4',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Find a lucrative job as a respected Software Engineer who works a 9 to 3',
            timestamp: '2022-02-11T1400'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Build and Sell AI Model',
            owner: 'Ania Kubow',
            avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg',
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'Make a video about AI',
            timestamp: '2022-02-11T1100'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build A Bot',
            owner: 'Ania Kubow',
            avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg',
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'Make a video about a bot',
            timestamp: '2022-02-11T1800'
        },
    ]

    //1 Find all unique Category in the array.
    //2 and how do we et the unique categories, well all im going to do is go into the data, if data exist, go into each object
    //2 get the category of each object.
    //2 new Set is looking for all unique values and putting them in an array.

    const uniqueCategories = [
        ...new Set(data?.map(({ category }) => category))
    ]

    //3 Seperate by Category

    //4 LEFT OF THE = NAME THAT IS BEING PASSED DOWN
    //5 RIGHT: WHAT IS IT CALLED HERE.

    const colors = data?.map((ticket) => {
        return ticket.color
    });

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {data && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {data?.filter(ticket =>
                            ticket.category === uniqueCategory).map((w, i) => (
                                <TicketCard
                                    ticket={w}
                                    name={w.owner}
                                    title={w.title}
                                    id={i}
                                    color={colors[categoryIndex] || colors[0]}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;