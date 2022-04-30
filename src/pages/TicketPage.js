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
        category: []
    })

    const handleChange = (propertyName) => (event) => {
        console.log('in handleChange');
        setFormData({ ...formData, [propertyName]: event.target.value });
    };

    const handleSubmit = () => {
        console.log('in Submit')
    }

    const categories = ['test 1', 'test 2'];

    console.log('formData: ', formData)

    return (
        <div className="ticket">
            <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
            <div className="ticket-container">
                {/* <div>{categories?.map((category, i) => {
                    <div>{category}</div>
                                })}</div> */}
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
                            id="category"
                            value={formData.category}
                            onChange={handleChange("category")}
                            required={true}>
                            {categories?.map((category, _index) => {
                                return <option value={category} key={_index} multiple>{category}</option>
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
                        <label>Priority</label>
                        <div className="multiple-input-container">
                            <input
                                id="priority-1"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={1}
                                checked={formData.priority == 1}
                            />
                            <label htmlFor="priority-1">1</label>
                            <input
                                id="priority-2"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={2}
                                checked={formData.priority == 2}
                            />
                            <label htmlFor="priority-2">2</label>
                            <input
                                id="priority-3"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={3}
                                checked={formData.priority == 3}
                            />
                            <label htmlFor="priority-3">3</label>
                            <input
                                id="priority-4"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={4}
                                checked={formData.priority == 4}
                            />
                            <label htmlFor="priority-4">4</label>
                            <input
                                id="priority-5"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={5}
                                checked={formData.priority == 5}
                            />
                            <label htmlFor="priority-5">5</label>
                        </div>

                        <input
                            type="range"
                            id="progress"
                            name="progress"
                            value={formData.progress}
                            min="0"
                            max="100"
                            onChange={handleChange}
                        />
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage;