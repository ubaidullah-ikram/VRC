import CustomCard from '../components/Card';
import AreaChartComponent from '../components/Charts/AreaChart';
import BarChartComponent from '../components/Charts/BarChart';
import SmallCardChart from '../components/Charts/SmallCardChart';
import Header2 from '../components/Nevbar2';

const Dashboard = ({ setIsLoggedIn }) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Header2 setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: ' column',
          alignItems: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          maxWidth: '85%',
          marginTop: '110px',
          marginLeft: '10%',
          padding: '30px 0 0',
        }}
      >
        <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
          <CustomCard
            color="#28a745"
            text="Bounce Rate"
            heading="53%"
            icon="/rate.png"
          />
          <CustomCard color="#17b2a8" text="Active Users" />
          <CustomCard color="#ffc107" text="Users Reistration" />
          <CustomCard
            color="#dc3545"
            text="Unique Visitors"
            heading="65"
            icon="/visitors.png"
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <SmallCardChart
            heading="432422"
            text="Sale"
            fillColor="#f8fafb"
            strokeColor="#dce6ec"
          />
          <SmallCardChart
            heading="243522"
            text="Expenses"
            fillColor="#f8fafb"
            strokeColor="#dce6ec"
          />
          <SmallCardChart
            heading="133965"
            text="Profits"
            fillColor="#cde9fe"
            strokeColor="#0390fb"
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <BarChartComponent />
          <AreaChartComponent />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
