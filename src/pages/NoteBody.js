import React from 'react'
import NavAction from '../comp/Nav-action'
import Card from 'react-bootstrap/Card';
import './pages.css'


export default function NoteBody() {
	return (
		<div>
			<NavAction />
			<div className='noteBody'>
				<Card.Body>
					<Card.Title style={{ textAlign: "left", fontWeight: "500", fontSize: '16px', color: '616161' }}> I am in</Card.Title>
					<Card.Text style={{ textAlign: "left", fontWeight: '400px', fontSize: '12px' }}> This is the beggining of your notes. 						You can write anything here and be sure to find them later, safe secure and readable /n
						I am writing and reading my notes now</Card.Text>
				</Card.Body>

			</div>

		</div>
	)
}
