import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Note(props) {
  return (
    <Link to="/notebody"  style={{textDecoration: 'none'}}>
      <Card style={{ width: '175px', margin: "10px" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "left", fontWeight: "500", fontSize: '16px', color: '616161' }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "left", fontWeight: '400px', fontSize: '12px' }}>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Note;