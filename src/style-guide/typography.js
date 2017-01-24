// External
import React from 'react';


// Component definition
const Typography = () => {
  return (
		<section className="typography">
			<h2 className="typography-title">Typography</h2>
			<div className="typography-list">
				<div className="font-box left-font">
					<h2>Alegreya Small Caps</h2>
					<div>abcdefghijklmnopqrstuvwxyz</div>
					<div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
					<div>1234567890!@#$%^&*(){}[]</div>
				</div>
				<div className="font-box right-font">
					<h2>Open Sans</h2>
					<div>abcdefghijklmnopqrstuvwxyz</div>
					<div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
					<div>1234567890!@#$%^&*(){}[]</div>
				</div>
			</div>
		</section>
  );
};

export default Typography;
