import TicketCard from "../components/TicketCard";

const Dashboard = () => {

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