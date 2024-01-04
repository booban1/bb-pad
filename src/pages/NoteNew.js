import React from 'react'
import NavAction from '../comp/Nav-action'
import Card from 'react-bootstrap/Card';
import './pages.css'

export default function NoteNew() {

	return (
		<div>
			<NavAction />
			<div className='noteBody'>
				<form>
					<Card.Title style={{ textAlign: "left", fontWeight: "500", fontSize: '16px', color: '616161' }}> I am in</Card.Title>
					<Card.Text style={{ textAlign: "left", fontWeight: '400px', fontSize: '12px' }}>|</Card.Text>
				</form>
			</div>
		</div>
	)
}
