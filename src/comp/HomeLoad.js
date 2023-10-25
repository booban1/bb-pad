import React from 'react'
import '../App.css'
import Nav from './Nav';
import Container from 'react-bootstrap/Container';
import Note from './BNote.js';
import FloatBtn from './FloatBtn';


export default function HomeLoad

      () {
      return (
            <div>
                  <Nav></Nav>
                  <Container style={{ display: "flex", flexFlow: "wrap" }}>

                        <Note title="I am in"
                              text='This is the beggining of your notes. 
              You can write anything here and be sure to find them later, safe secure and readable'
                        >
                        </Note>

                        <Note title="How Do I Start"
                              text='Nothing!
              Just..
              start ..
              Typing...'
                        >
                        </Note>

                        <Note title="Make it colored"
                              text='You can change the color you want to make it visible...'
                        >
                        </Note>

                        <Note title="Don’t worry"
                              text='We have only specific number of color pallets but that should not be a thing...

              It Just works'
                        >
                        </Note>

                        <Note title="Soon you will be able to pin it"
                              text='Yes, important things first. 
              We are working hard to make it as accessible as possible. '
                        >
                        </Note>

                  </Container>
                  <FloatBtn/>


            </div>
      )
}
