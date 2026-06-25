// Made because I wanted to use my original css from last assignment, and had to tweak it to use it
const Header = ({ title, activeView, setView }) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>Terminal Status: Active (Waiting for Detailed Threats)</p>
            
            {/* Buttons set up based off css*/}
            <div className="controls" style={{ justifyContent: 'center', marginTop: '15px' }}>
                <button onClick={() => setView('dashboard')}> Dashboard View </button>
                <button onClick={() => setView('about')}> System Info </button>
            </div>
        </header>
    );
};

export default Header;