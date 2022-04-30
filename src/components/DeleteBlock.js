const DeleteBlock = () => {

    const deleteTicket = () => {
        console.log('in deleteTicket')
    }

    return(
      <div className="delete-block">
          <div className="delete-icon" onClick={deleteTicket}>Ø</div>
      </div>
    )
}

export default DeleteBlock;