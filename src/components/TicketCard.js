import { Link } from 'react-router-dom';
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";

const TicketCard = ({ ticket, name, title, id, color }) => {

//6 Ticket is the entire object. aka w

    return(
        <>
        <div className="ticket-card">
                <Link to={`/ticket/${ticket.documentId}`} id="link">
                <div className="ticket-color" style={{ backgroundColor: color}}></div>
                    <h3>{title}</h3>
                    <AvatarDisplay 
                        ticket={ticket} 
                    />
                    <StatusDisplay
                        status={ticket.status}
                    />
                    <PriorityDisplay 
                        priority={ticket.priority}
                    />
                    <ProgressDisplay 
                        progress={ticket.progress}
                    />
                </Link>
                <DeleteBlock />
        </div>
        </>
    )
}

export default TicketCard;