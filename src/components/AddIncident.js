import { useState } from 'react';

// Self explanatory, just the way to actually say when you add this, do this
const AddIncident = ({ onAdd }) => {
    // Creates temp memory for the input box (when sometihng is added)
    const [text, setText] = useState(''); // REMEMBER!! ('') just mean start as empty text box, not function (idk what im thinking lol)
    
    // The memory for the simple dropdown, starting at 'Low'
    const [severity, setSeverity] = useState('Low'); 

    // To update the react while not reloading the page everytime an incident is added
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Failsafes, basically for those 'what is the user doing?' moments
        if (!text) {
            alert('Please enter threat information');
            return;
        }

        // Once everything is updated, send BOTH text and severity to App.js to add info to dedicated lists
        onAdd({ text: text, severity: severity }); 

        // Wipe the sequential textbox and reset dropdown to allow further threat inputs
        setText(''); 
        setSeverity('Low');
    }; 

    // The HTML layout to form on screen
    return (
        <div className='controls'>
            {/* Runs the handleSubmit function when the submit button is pressed*/}
            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', gap: '10px'}}>

            <input
                type='text'
                placeholder='Please enter a new threat event'
                value={text} // To set an input box to the memory (help store input memeory into react)
                // Any text gets instantly updated into the React memory due to the event.target.value
                onChange={(event) => setText(event.target.value)}
                style={{ flex: 1 }} 
            />

            {/* AI drop down bar */}
            <select 
              value={severity} 
              onChange={(event) => setSeverity(event.target.value)}
              style={{ backgroundColor: '#100e12c3', color: '#d3d3d3', border: '1px solid green', padding: '0 10px', cursor: 'pointer', colorScheme: 'dark' }}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <button type='submit' style={{ cursor: 'pointer' }}> Log Threat </button>

            </form>
        </div>
    );
}; 

export default AddIncident;