import Scouting from '../components/Scouting';

const Document = ({ setIsLoggedIn }) => {
  return (
    <div style={{ marginLeft: '70px' }}>
      <Scouting setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Document;
