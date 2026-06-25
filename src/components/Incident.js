const Incident = ({ incident, onDelete }) => {

    // This is where the CSS Flexbox will be implemented so react knows what to make for INDIVIDUAL boxes
    return (

        <div className = 'scenario-box' style = {{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        
        <p style = {{ margin: 0 }}> { incident.text } </p>

        <button /* When the user presses delete, this button will call the onDelete function to delete a specific ID*/
        onClick = {() => onDelete(incident.id)}
        style={{ backgroundColor: '#4a1515', color: 'white', border: '1px solid #ff4444', padding: '5px 10px', cursor: 'pointer' }}>
        Resolve Threat {/* Name of the button to delete the threat once the user resolves the threat*/}

      </button>
    </div>
  );
};

export default Incident;