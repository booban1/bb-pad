import Button from 'react-bootstrap/Button';


import React from 'react'

export default function FloatBtn() {
  return (
	<div className='float-btn'><Button variant="light" className="float-btn-in" style={{ borderRadius: '10px', width: '56px', height: '56px', color: '#888888', boxShadow: '0px 0px 13px 0px rgba(0, 0, 0, 0.25)'}}>
		<svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8867 12.8333H24.0534C24.6977 12.8333 25.22 13.3557 25.22 14C25.22 14.6443 24.6977 15.1667 24.0534 15.1667H15.8867V23.3333C15.8867 23.9777 15.3644 24.5 14.72 24.5C14.0757 24.5 13.5534 23.9777 13.5534 23.3333V15.1667H5.3867C4.74237 15.1667 4.22003 14.6443 4.22003 14C4.22003 13.3557 4.74237 12.8333 5.3867 12.8333H13.5534V4.66667C13.5534 4.02233 14.0757 3.5 14.72 3.5C15.3644 3.5 15.8867 4.02233 15.8867 4.66667V12.8333Z" fill="#616161"/>
</svg></Button>{''}</div>
  )
}
