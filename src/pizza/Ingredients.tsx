import React from 'react';

interface Props {}

export default function Ingredients({}: Props) {
	return (
		<div className='container'>
			<div className="ingredients-wrap">
				<div className="ingredients-top">
				</div>
				<div className="checkout">
					<h2 className="pizza-title">Checkout info</h2>
					<form onSubmit={(e) => e.preventDefault()} className="checkout-form">
						<div className="form-item">
							<label htmlFor="inpName" className="lbl">Name:</label>
							<input type="text" className="inp" id='inpName' placeholder='Name'/>
						</div>

						<div className="form-item">
							<label htmlFor="inpMail" className="lbl">Email</label>
							<input type="text" className="inp" id='inpMail' placeholder='Email'/>
						</div>

						<div className="form-item">
							<label htmlFor="inpDelivery" className="lbl">Choose delivery method</label>
							<select className='select' value='delivery' id='inpDelivery'>
								<option value="delivery">Delivery</option>
								<option value="pickup">Local pickup</option>
							</select>
						</div>

						<div className="form-item">
							<label htmlFor="inpNotes" className="lbl">Additional notes</label>
							<textarea className='txtArea' id="inpNotes"></textarea>
						</div>

						<div className="form-item">
							<label className="lbl">Are you regular client?</label>
							<div className="rdo-wrap">
								<label htmlFor="rdoClient" className="lblRadio">
									<input type="radio" className="inpRadio" id='rdoClient' name='rdo'/>
									Yes
								</label>
								<label htmlFor="rdoClient2" className="lblRadio">
									<input type="radio" className="inpRadio" id='rdoClient2' defaultChecked name='rdo'/>
									No
								</label>
							</div>
						</div>

						<div className="form-item">
							<label className="lbl">Do You Have a coupon code?</label>
							<label htmlFor="lblChbx" className="lblChbx">
								<input type="checkbox" className="inpChbx" />
							</label>
						</div>

						<div className="form-item">
							<label htmlFor="" className="lbl">coupon</label>
							<input type="text" className="inpCoupon" placeholder='Coupon code'/>
						</div>
						<div className="form-item checkout-btns">
							<button className='add-btn add-btn_black'>reset</button>
							<button className='add-btn add-btn_blue'>submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}