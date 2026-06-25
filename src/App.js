import { useState } from 'react';
import Header from './components/Header';
import Incident from './components/Incident';
import Incidents from './components/Incidents';
import AddIncident from './components/AddIncident';

function App() {
  // The React's short-term memory, basically remembers what the user is looking at
  // The 'dashboard' is what the user starts and sees first
  const [activeView, setActiveView] = useState('dashboard');
  
  // Creating the list of fake threats
  // Use setIncidents to tell React to redraw the screen
  const [incidents, setIncidents] = useState([
    { id: 1, text: 'Unauthorized Login Attempt - IP: 192.168.1.10', severity: 'High' },
    { id: 2, text: 'Malware Signature Detected in /downloads', severity: 'Medium' }
  ]);

  // This is the function that actually adds a new threat to our list, DUH
  // Pass down to form so react can know what to do when user presses submit
  const addIncident = (incidentData) => {
    // Just making up a random ID number since we aren't plugged into a real database yet
    const id = Math.floor(Math.random() * 10000); 
    
    // Super important rule here: you can't just push new items into React state
    // copies current list and loops any new list to current list ^v
    setIncidents([...incidents, { id, ...incidentData }]);
  };

  // This handles deleting a threat
  const deleteIncident = (id) => {
    // Filtering the list to keep everything EXCEPT the one we just clicked delete on.
    setIncidents(incidents.filter((incident) => incident.id !== id));
  };

  // The return block is where the screen is drawn (P.S. NO HTML!!)
  return (
    <div>
      {/* Sending the state functions down into the Header so the buttons inside it actually do something */}
      <Header title="END-USER INCIDENT DASHBOARD" activeView={activeView} setView={setActiveView} />

      {/* This is the quick viewer 'manager' Basically checks: 'Hey, is the activeView currently 'dashboard'? If so, show the app. If not, show the system info box' */}
      {activeView === 'dashboard' ? (
        
        // The empty <> acts like an invisible wrapper so react doesn't keep beating me
        <> 
          {/* Handing the add function down to the form */}
          <AddIncident onAdd={addIncident} />
          
          {/* Show threats if there are any. If the list is empty, show a message instead */}
          {incidents.length > 0 ? (
            <Incidents incidents={incidents} onDelete={deleteIncident} />
          ) : (
            <p style={{ textAlign: 'center', color: '#617065' }}> No current incidents </p>
          )}
        </>
      ) : (
        // This is what renders if they clicked the System Info button 
        <div className="scenario-box">
          <h3> System Information </h3>
          <p> Version 1.1.1.1 - Incident Monitoring Protocol </p>
          <p> Status: Secure </p>
        </div>
      )}
    </div>
  );
}

export default App;