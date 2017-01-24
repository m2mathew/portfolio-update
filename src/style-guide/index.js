// External
import React from 'react';

// Internal
import ColorScheme from './color-scheme';
import Typography from './typography';


// Component definition
const StyleGuide = () => {
  return (
		<section className="style-container">
	    <h1 className="style-title">Style Guide</h1>
			<ColorScheme />
			<Typography />
		</section>
  );
};

export default StyleGuide;
