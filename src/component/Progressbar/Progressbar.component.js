import React, { Component } from 'react';
import './Progressbar.style';

class Progressbar extends Component {

	renderProgressSteps() {
		const { stepTitles, progress } = this.props;

		return stepTitles.map((title, index) => {
			const nonFinished = index <= progress ? '' : 'NonFinished';
			if (index === stepTitles.length - 1)
				return (
					<div className='EdgeProgressStep'>
						<div className={`StepBar ${nonFinished}`}></div>
					</div>
				);
			else return (
				<div className={index === 0 ? 'EdgeProgressStep' : 'ProgressStep'}>
					<div className={`StepBar ${nonFinished}`}></div>
					<div className={`Counter ${nonFinished}`}>
						<div>{index + 1}</div>
						<div className='Title'>{title.replace(/ .*/, '')}</div>
					</div>
				</div >
			);
		});
	}

	render() {
		return (
			<div className='Progressbar'>
				{this.renderProgressSteps()}
			</div>
		);
	}
}

export default Progressbar;