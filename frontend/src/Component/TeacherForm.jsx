import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UsernameContext } from './Teacher'; // Correct import path

export default function TeacherForm() {
    const username = useContext(UsernameContext); // Access the username from context
    const [tags, setTags] = useState('');
    const [videoName, setVideoName] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [link, setLink] = useState('');
    const [templateLink, setTemplateLink] = useState('');
    const [usernameInput, setUsernameInput] = useState(''); // Define usernameInput state

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Data to be sent
        const newData = {
            tags: tags,
            VideoName: videoName,
            VideoDescription: videoDescription,
            UserName: usernameInput || username, // Use usernameInput if available, otherwise use username from context
            link: link,
            Template: templateLink
        };

        // Send the data to the server
        axios.post('http://localhost:3002/teacher', newData)
            .then(() => {
                alert('Successfully uploaded!');
                // Clear the form fields after successful upload
                setTags('');
                setVideoName('');
                setVideoDescription('');
                setUsernameInput('')
                setLink('');
                setTemplateLink('');
            })
            .catch(error => console.error('Error uploading data:', error));
    };

    return (
        <div className='teacherform_container'>
            <form className='mt-5' onSubmit={handleSubmit}>
                <div>
                    <label>Tags :</label>
                    <input type="text" value={tags} onChange={(e) => { setTags(e.target.value) }} required />
                </div>
                <br />
                <div>
                    <label>Video Name :</label>
                    <input type="text" value={videoName} onChange={(e) => { setVideoName(e.target.value) }} required />
                </div>
                <br />
                <div>
                    <label>Video Description</label>
                    <input type="text" value={videoDescription} onChange={(e) => { setVideoDescription(e.target.value) }} required />
                </div>
                <br />
                <div>
                    <label>Username</label>
                    <input type="text" value={usernameInput} onChange={(e) => { setUsernameInput(e.target.value) }} />
                </div>
                <br />
                <div>
                    <label>Link</label>
                    <input type="text" value={link} onChange={(e) => { setLink(e.target.value) }} required />
                </div>
                <br />
                <div>
                    <label>Template</label>
                    <input type="text" value={templateLink} onChange={(e) => { setTemplateLink(e.target.value) }} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}