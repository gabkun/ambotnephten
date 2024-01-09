import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [viewSubject, setViewSubject] = useState(null);
  const [formData, setFormData] = useState({
    subjectID: '',
    title: '',
    description: '',
    assignments: '',
  });

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/viewSubjects');
      setSubjects(response.data.subjects);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const handleAddSubject = async () => {
    try {
      await axios.post('http://localhost:3001/admin/addSubject', formData);
      setModalVisible(false);
      fetchSubjects();
    } catch (error) {
      console.error('Error adding subject:', error);
    }
  };

  const handleRemoveSubject = async (subjectID) => {
    try {
      await axios.delete(`http://localhost:3001/admin/removeSubject/${subjectID}`);
      fetchSubjects();
    } catch (error) {
      console.error('Error removing subject:', error);
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleViewSubject = (subject) => {
    setViewSubject(subject);
    setModalVisible(true);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => setModalVisible(true)}>Add Subject</button>

      {/* Modal for adding subjects */}
      {modalVisible && (
        <div>
          <h2>Add Subject</h2>
          <label>ID:</label>
          <input
            type="text"
            value={formData.subjectID}
            onChange={(e) => setFormData({ ...formData, subjectID: e.target.value })}
          />
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <label>Description:</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <label>Upload File:</label>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleAddSubject}>Add Subject</button>
          <button onClick={() => setModalVisible(false)}>Cancel</button>
        </div>
      )}

      {/* List of subjects */}
      <div>
        <h2>Subjects</h2>
        <ul>
          {subjects.map((subject) => (
            <li key={subject.subjectID}>
              <strong>{subject.title}</strong> - {subject.description}
              <button onClick={() => handleRemoveSubject(subject.id)}>Remove</button>
              <button onClick={() => handleViewSubject(subject)}>View</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display details of the selected subject */}
      {viewSubject && (
        <div className="subject-details-modal">
          <h2>{viewSubject.title}</h2>
          <p>{viewSubject.description}</p>
          {/* Add more details as needed */}
          <button onClick={() => setModalVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;