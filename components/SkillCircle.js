import React from 'react';

const SkillCircle = ({ title, percentage }) => {
  const circleStyle = {
    width: '100px',
    height: '100px',
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
    border: '10px solid gray',
  };

  const percentageBorderStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    border: `10px solid yellow`,
    clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`,
  };

  const percentageStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    zIndex: '1',
  };

  const titleStyle = {
    marginTop: '10px',
    fontSize: '16px',
  };

  return (
    <div style={circleStyle}>
      <div style={borderStyle}></div>
      <div style={percentageBorderStyle}></div>
      <div style={percentageStyle}>{percentage}%</div>
      <div style={titleStyle}>{title}</div>
    </div>
  );
};

export default SkillCircle;
