const Incident = ({ incident, onDelete }) => {

  // This will add the different threat color / options for users
  const threatColor =
    incident.severity === 'High' ? '#ff0000' :
    incident.severity === 'Medium' ? '#fffb00' :
    incident.severity === 'Low' ? '#09ff00' :
    'transparent'; // just as a failsafe

  // Here is the 3 different color related to threat
  return (
        // Added borderLeft right here so the color variable actually gets used!
        <div className='scenario-box' style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `5px solid ${threatColor}` }}>
        
        {/* To apply the corresponding colors to the threat levels*/}
        <p style={{ margin: 0, color: threatColor, fontWeight: 'bold' }}> 
            { incident.text } 
        </p>

        <button /* When the user presses delete, this button will call the onDelete function to delete a specific ID*/
        onClick={() => onDelete(incident.id)}
        style={{ backgroundColor: '#4a1515', color: 'white', border: '1px solid #ff4444', padding: '5px 10px', cursor: 'pointer' }}>
        Resolve Threat {/* Name of the button to delete the threat once the user resolves the threat*/}

      </button>
    </div>
  );
};

export default Incident;