import React from 'react'
import NavAction from '../comp/Nav-action'
// import Card from 'react-bootstrap/Card';
import './pages.css'

export default function NoteBody() {

	return (
		<div>
			<NavAction />
			<div className='noteBody'>
				<form>
					<input name="Title" defaultValue="Title" className="notebody-title" style={{ textAlign: "left", fontWeight: "500", fontSize: '16px', color: '616161' }}></input>
					<textarea name="text" defaultValue="You can write anything here and be sure to find them later, safe secure and readable. I am writing and reading my notes now" className="notebody-text" style={{ textAlign: "left", fontWeight: '400px', fontSize: '12px' }}></textarea>
				</form>
			</div>
		</div>
	)
}
