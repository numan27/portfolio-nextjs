import React from 'react';

const SkillCircle = ({ title, percentage }) => {
  const circleStyle = {
    width: '125px',
    height: '125px',
    borderRadius: '50%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const borderStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: '12px solid #374151',
  };

  const percentageBorderStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: `12px solid #B17816`,
    clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`,
  };

  const percentageStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    zIndex: '1',
  };


  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='sm:w-32 w-28 sm:h-32 h-28 relative flex items-center justify-center' >
        <div style={borderStyle}></div>
        <div className='skillCircle' style={percentageBorderStyle}></div>
        <div style={percentageStyle}>{percentage}%</div>
      </div>
      <div className='mt-3 sm:text-xl text-base font-bold uppercase'>{title}</div>
    </div>
  );
};

export default SkillCircle;
