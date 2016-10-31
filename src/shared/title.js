import React from 'react';

const styles = {
  title: {
    width: '100%',
    marginTop: '4.5em',
    marginBottom: '0.5em',
    padding: '0.5em auto',
    borderBottom: '6px solid gray',
  },
  textLeft: {
    fontFamily: "Open Sans",
    fontWeight: 300,
    textTransform: 'uppercase',
    fontSize: 30,
    textAlign: 'center',
  },
  textRight: {
    fontFamily: "Open Sans",
    fontWeight: 100,
    textTransform: 'lowercase',
    fontSize: 22,
    marginBottom: '1.5em',
    marginLeft: '0.3em',
    textAlign: 'center',
  }
};


const Title = () => (
  <div className="title" style={styles.title} >
    <h1 className="text-left" style={styles.textLeft} >Mike Mathew</h1>
    <h3 className="text-left" style={styles.textRight} >front end web developer</h3>
  </div>
);

export default Title;
