import React from 'react';
import { useState, useEffect } from 'react';

const TicketPage = () => {

    const editMode = false

    const [formData, setFormData] = useState({
        status: 'not started',
        progress: 0,
        timestamp: new Date().toISOString(),
        title: '',
        description: '',
        category: ''
    })

    const handleChange = (propertyName) => (event) => {
        setFormData({ ...formData, [propertyName]: event.target.value });
    };

    const handleSubmit = () => {
        console.log('in Submit')
    }

    return(
        <div className="ticket">
            <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
            <div className="ticket-container">
            <div>{categories?.map((category, i) => {
                    <div>{cateogry}</div>
                                })}</div>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={handleChange('title')}
                            required={true}
                            value={formData.title}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={handleChange('description')}
                            required={true}
                            value={formData.description}
                        />
                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}>
                                {categories?.map((category, i) => {
                                    <option value={category}>{category}</option>
                                })}
                        </select>

                        <label htmlFor="new-category">New Category</label>
                        <input
                            id="new-category"
                            name="category"
                            type="text"
                            onChange={handleChange('new_category')}
                            required={true}
                            value={formData.category}
                        />
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage;