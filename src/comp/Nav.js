import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Nav() {
  return (
	
	<Container style={{ marginTop: '20px'}}>
     
	  <Row>
        <Col  xs={2}>
			<Button variant="outline-primary" className="prof-banner" style={{ borderRadius: '50%', width: '47px', height: '47px', color: '#888888', borderColor:'#888888'}}>B</Button>{''}
		</Col>
        <Col style={{ textAlign: "left", fontWeight: "700", fontSize: '18px', alignItems: 'center', color: '#888888',	 marginTop: '10px'}}> Your Notes Pad</Col>
        <Col>
			<ButtonGroup  aria-label="Basic example">
				<Button style={{background: '#ffffff', border: "none"}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#888888" class="bi bi-search" viewBox="0 0 16 16">
 						 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg></Button>
				<Button variant="secondary" style={{background: '#ffffff', border: "none"}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#888888" class="bi bi-three-dots" viewBox="0 0 16 16">
						<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
					</svg></Button>
			</ButtonGroup>
		</Col>
      </Row>
	  <hr></hr>
    </Container>

  );
}

export default Nav;