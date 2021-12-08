import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'Component/ContentWrapper';
import Progressbar from 'Component/Progressbar';
import './Checkout.extension.style';

class Checkout extends SourceCheckout {

	renderProgressbar() {
		const { checkoutStep } = this.props;
		let progress = 0;
		const stepTitles = Object.entries(this.stepMap).map((step, index) => {
			if (step[0] === checkoutStep) progress = index;
			return step[1].title;
		});

		return <Progressbar stepTitles={stepTitles} progress={progress} />;
	}

	render() {
		return (
			<main block="Checkout">
				{this.renderProgressbar()}
				<ContentWrapper
					wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
					label={__('Checkout page')}
				>
					{this.renderSummary(true)}
					<div block="Checkout" elem="Step">
						{this.renderTitle()}
						{this.renderGuestForm()}
						{this.renderStep()}
						{this.renderLoader()}
					</div>
					<div>
						{this.renderSummary()}
						{this.renderPromo()}
						{this.renderCoupon()}
					</div>
				</ContentWrapper>
			</main>
		);
	}
}

export default Checkout;
