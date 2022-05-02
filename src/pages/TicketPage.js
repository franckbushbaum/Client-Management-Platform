import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const TicketPage = () => {

    const editMode = false

    const navigate = useNavigate()

    // const [firstFormData, setFirstFormData] = useState({
    //     status: 'not started',
    //     progress: 0,
    //     timestamp: new Date().toISOString(),
    //     title: '',
    //     description: '',
    //     category: [],
    //     owner: '',
    //     avatar: '',
    // })

    const [formData, setFormData] = useState({
        owner: '',
        avatar: '',
        title: '',
        description: '',
        category: '',
        progress: 0,
        status: 'not started',
        timestamp: new Date().toISOString()
    })

    const handleChange = (propertyName) => (event) => {
        setFormData({ ...formData, [propertyName]: event.target.value });
    };

    //7 Post to backend

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('formData', formData)
        // const response = await axios.post('http://localhost:5000/tickets',  { formData } )
        const response = await axios.post('http://localhost:5000/tickets',  { data : formData } )
        console.log('response is', response)
        const success = response.status === 200
        if (success) {
            navigate('/')
            console.log('response is', response)
        }
    }

    const categories = ['test 1', 'test 2', '455', 'chat', '3', 323];


    

    return (
        <div className="ticket">
            <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
            <div className="ticket-container">
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
                            onChange={handleChange('category')}
                            required={true}
                            value={formData.category}
                        />
                        <label>Priority</label>
                        <div className="multiple-input-container">
                            <input
                                id="priority-1"
                                name="priority"
                                type="radio"
                                onChange={handleChange('priority')}
                                value={1}
                                checked={formData.priority == 1}
                            />
                            <label htmlFor="priority-1">1</label>
                            <input
                                id="priority-2"
                                name="priority"
                                type="radio"
                                onChange={handleChange('priority')}
                                value={2}
                                checked={formData.priority == 2}
                            />
                            <label htmlFor="priority-2">2</label>
                            <input
                                id="priority-3"
                                name="priority"
                                type="radio"
                                onChange={handleChange('priority')}
                                value={3}
                                checked={formData.priority == 3}
                            />
                            <label htmlFor="priority-3">3</label>
                            <input
                                id="priority-4"
                                name="priority"
                                type="radio"
                                onChange={handleChange('priority')}
                                value={4}
                                checked={formData.priority == 4}
                            />
                            <label htmlFor="priority-4">4</label>
                            <input
                                id="priority-5"
                                name="priority"
                                type="radio"
                                onChange={handleChange('priority')}
                                value={5}
                                checked={formData.priority == 5}
                            />
                            <label htmlFor="priority-5">5</label>
                        </div>                      
                 { editMode && <>
                        <input
                            type="range"
                            id="progress"
                            name="progress"
                            value={formData.progress}
                            min="0"
                            max="100"
                            onChange={handleChange('progress')}
                        />                     
                        <label htmlFor="progress">Progress</label>
                        <label>Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange('status')}
                        >
                            <option selected={formData.status === 'done'} value={'done'}>Done</option>
                            <option selected={formData.status === 'working on it'} value={'working on it'}>Working on it</option>
                            <option selected={formData.status === 'stuck'} value={'stuck'}>Stuck</option>
                            <option selected={formData.status === 'not started'} value={'not started'}>Not started</option>
                        </select>
                </> } 
                    <input type="submit"/>                
                    </section>
                    <section>
                        <label htmlFor='owner'>Owner</label>
                        <input
                            id="owner"
                            name="owner"
                            type="text"
                            onChange={handleChange('owner')}
                            required={true}
                            value={formData.owner}
                        />
                        <label htmlFor='avatar'>Avatar</label>
                        <input
                            id="avatar"
                            name="avatar"
                            type="url"
                            onChange={handleChange('avatar')}
                            required={true}
                            value={formData.avatar}
                        />

                        <div className="image-preview">
                            {formData.avatar  && 
                                <img src={formData.avatar} alt="image-preview" />                  
                            }
                        </div>                       
                    </section>
                </form>
            </div>
        </div>
    )
}

export default TicketPage;