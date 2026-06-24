import { useState } from 'react';

// Self explanatory, just the way to actually say when you add this, do this
const AddIncident = ({ onAdd }) => {
    // Creates temp memory for the input box (when sometihng is added)

    const [text, setText] = useState(''); // REMEMBER!! (' ') just mean start as empty text box, not function (idk what im thinking lol)

    // To update the react while not reloading the page everytime an incident is added
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // Failsafes, basically for those 'what is the user doing?' moments
    if (!text) {
        alert ('Please enter threat information');
        return;
    }

    onAdd(text); // Once everything is updated, send to App.js to add info to dedicated lists

    setText(''); // Wipe the sequential textbox to allow further threat inputs
};

    // The HTML layout to form on screen
    return (
        <div className = 'controls'>
            {/* Runs the handleSubmit function when the submit button is pressed*/}
            <form onSubmit = { handleSubmit } style = {{ width: '100%', display: 'flex'}}>

            <input
                type = 'text'
                placeholder = 'Please enter the new threat event'

                value = { text } // To set an input box to the memory (help store input memeory into react)

                // Any text gets instantly updated into the React memory due to the event.target.value
                onChange = {(event) => setText (event.target.value)}
            />

            <button type = 'submit' > Log Threat </button>

            </form>
        </div>
    );

export default AddIncidents;