import Card from 'react-bootstrap/Card';

function Note(props) {
  return (
    <Card style={{ width: '175px', margin: "10px" }}>
      <Card.Body>
        <Card.Title style={{ textAlign: "left", fontWeight: "500", fontSize: '16px', color: '616161'}}>{props.title}</Card.Title>
        <Card.Text style={{textAlign: "left", fontWeight: '400px', fontSize: '12px'}}>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Note;