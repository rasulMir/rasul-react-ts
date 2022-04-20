import React, { useState } from 'react'

interface Props {}

export default function Checkout({}: Props) {
	let [ name, setName ] = useState('');
	let [ mail, setMail ] = useState('');
	let [ delivery, setDelivery ] = useState('delivery');
	let [ notes, setNotes ] = useState('');
	let [ regular, setRegular ] = useState(true);
	let [ isCoupon, setIsCoupon ] = useState(false);
	let [ coupon, setCoupon ] = useState('');


	const reset = () => {
		setName(name='');
		setMail(mail='');
		setDelivery(delivery='delivery');
		setNotes(notes='');
		setRegular(regular=true);
		setIsCoupon(isCoupon=false);
		setCoupon(coupon='');
	}

	const submit = (e: React.SyntheticEvent) => {
		localStorage.setItem('checkout', '');
		alert('SUBMITED');
	}

	return (
		<div className="checkout">
			<h2 className="pizza-title">Checkout info</h2>
			<form onSubmit={(e) => e.preventDefault()} className="checkout-form">
				<div className="form-item">
					<label htmlFor="inpName" className="lbl">Name:</label>
					<input type="text" className="inp" id='inpName' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
				</div>

				<div className="form-item">
					<label htmlFor="inpMail" className="lbl">Email</label>
					<input type="email" className="inp" id='inpMail' placeholder='Email' value={mail} onChange={e=>setMail(e.target.value)}/>
				</div>

				<div className="form-item">
					<label htmlFor="inpDelivery" className="lbl">Choose delivery method</label>
					<select className='select' value={delivery} id='inpDelivery' onChange={(e)=>setDelivery(e.target.value)}>
						<option value="delivery">Delivery</option>
						<option value="pickup">Local pickup</option>
					</select>
				</div>

				<div className="form-item">
					<label htmlFor="inpNotes" className="lbl">Additional notes</label>
					<textarea className='txtArea' id="inpNotes" value={notes} onChange={e=>setNotes(e.target.value)}></textarea>
				</div>

				<div className="form-item">
					<label className="lbl">Are you regular client?</label>
					<div className="rdo-wrap">
						<label htmlFor="rdoClient" className="lblRadio">
							<input type="radio" className="inpRadio" id='rdoClient' name='rdo'
								onChange={e=>setRegular(e.target.checked)}/>
							Yes
						</label>
						<label htmlFor="rdoClient2" className="lblRadio">
							<input type="radio" className="inpRadio" id='rdoClient2' defaultChecked={regular}
								onChange={e=>setRegular(e.target.checked)}
								name='rdo'/>
							No
						</label>
					</div>
				</div>

				<div className="form-item">
					<label className="lbl">Do You Have a coupon code?</label>
					<label htmlFor="lblChbx" className="lblChbx">
						<input type="checkbox" className="inpChbx" defaultChecked={isCoupon} onChange={e=>setIsCoupon(e.target.checked)}/>
					</label>
				</div>

				<div className="form-item">
					<label htmlFor="" className="lbl">coupon</label>
					<input type="text" className="inpCoupon" onChange={e=>setCoupon(e.target.value)} 
						value={coupon}
						placeholder='Coupon code'/>
				</div>

				<div className="form-item checkout-btns">
					<button className='add-btn add-btn_black' onClick={reset}>reset</button>
					<button className='add-btn add-btn_blue' onClick={submit}>submit</button>
				</div>
			</form>
		</div>
	)
}