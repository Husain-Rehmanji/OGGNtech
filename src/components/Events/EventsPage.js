import React from 'react';
import { FaCalendarAlt, FaImage } from 'react-icons/fa';
import {BsRobot} from 'react-icons/bs'
import {IoSchool} from 'react-icons/io5'
import {MdGroups} from 'react-icons/md'
const EventCard = ({ icon, name, ri, description, date }) => {
  return (
    <div
      style={{
        width: '75%',
        margin: '0 auto',
        marginBottom: '2rem',
        border: '2px solid #1eb2a6',
        boxShadow: '0 12px 14px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        background: 'linear-gradient(to right, white 40%, #1eb2a6)',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <div style={{ marginRight: '2.5rem' }}>
        {icon}
      </div>
      <div>
        <h2 style={{ color: '#139c90', marginBottom: '0.7rem' }}>{ri} {name}</h2>
        <p>{description}</p>
      </div>
      <div style={{ marginLeft: 'auto', color: 'white', fontSize: '27px' }}>
        <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
        {date}
      </div>
    </div>
  );
};

const EventsPage = () => {
  return (
    <div style={{ marginTop: '45rem' }}>

      <EventCard
        icon={<img src='../images/Robotics_Summer_Camp.png' />}
        name= "Robotics Summer Camp"
        ri= {<BsRobot/>}
        description="At Chembur | 22nd May - 26th May"
        date="5 Days"
      />
      <EventCard
        icon={<img src='../images/AfterSchool_Classes.png' />}
        name="After School Classes"
        ri= {<IoSchool />}
        description="Students Learnt Python,Scratch and App Development at Andheri"
        date="4 months"
      />
      <EventCard
        icon={<img src='../images/Kids_Group_Classes.png' />}
        name="Group Classes"
        ri={<MdGroups/>}
        description="At Navi Mumbai | 1st May - 31st May"
        date="5 Days a week"
      />
      <EventCard
        icon={<img src='../images/WorkShop_in_School.png' />}
        name="Workshop in School"
        ri= {<IoSchool />}
        description="Introduction to Coding for Kids at Dombivalli"
        date="1 day"
      />
      {/* Add more EventCard components for additional events */}
    </div>
  );
};

export default EventsPage;