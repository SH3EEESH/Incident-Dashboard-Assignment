// This will build off the incident.js for multiple boxes, so it actively refreshes boxes without doing any extra work
import Incident from './Incident';

// This area will grab all of the threats and delete functions from App.js
const Incidents = ({ incidents, onDelete }) => {
    return (
        <>
        {/* Using .map function to cycle through different threats and find the fledged out UI boxes*/}
        {incidents.map((incident) => (
        <Incident 
          // Use the random unique ID as React key so it knows what is going on
          key={incident.id} 
          
          // Passing each specific threat data down to the individual card(s)
          incident={incident} 
          
          // Passing the delete function down the chain
          onDelete={onDelete} 
        />
      ))}
    </>
  );
};

export default Incidents;