import React from 'react';
import axios from 'axios';

const DeleteBlock = ({ documentId }) => {

    const deleteTicket = async () => {
        const response = await axios.delete(`http://localhost:5000/${documentId}`)
            const success = response.status == 200
            if(success) window.location.reload()
    }

    return(
      <div className="delete-block">
          <div className="delete-icon" onClick={deleteTicket}>Ø</div>
      </div>
    )
}

export default DeleteBlock;