// External
import React from 'react';


// Component definition
const ColorScheme = () => {
  return (
		<section className="color-scheme">
			<h2 className="style-title">Color Scheme</h2>
			<div className="color-list">
				<div className="color-box color-1">
					<div>lightcoral</div>
					<div>rgb(240,128,128)</div>
				</div>
				<div className="color-box color-2">
					<div>cornflowerblue</div>
					<div>rgb(100,149,237)</div>
				</div>
				<div className="color-box color-3">
					<div>darkslateblue</div>
					<div>rgb(72,61,139)</div>
				</div>
				<div className="color-box color-4">
					<div>lightpink</div>
					<div>rgb(255,182,193)</div>
				</div>
			</div>
		</section>
  );
};

export default ColorScheme;
