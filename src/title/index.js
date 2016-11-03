import React from 'react';

const titleStyle = {
  width: '100%',
  marginTop: '4.5em',
  marginBottom: '0.5em',
  padding: '0.5em auto',
  borderBottom: '6px solid gray',
};

const textLeftStyle = {
  fontFamily: "Open Sans",
  fontWeight: 300,
  textTransform: 'uppercase',
  fontSize: 30,
  textAlign: 'center',
};

const textRightStyle = {
  fontFamily: "Open Sans",
  fontWeight: 100,
  textTransform: 'lowercase',
  fontSize: 22,
  marginBottom: '1.5em',
  marginLeft: '0.3em',
  textAlign: 'center',
};

const Title = () => (
  <div style={titleStyle}>
    <h1 style={textLeftStyle}>Mike Mathew</h1>
    <h3 style={textRightStyle}>front end web developer</h3>
  </div>
);

export default Title;
