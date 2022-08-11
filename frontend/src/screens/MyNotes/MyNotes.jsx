import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./MyNotes.css";
import axios from 'axios'
const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
    }
  };
  const [notes,setNotes]=useState([]);

  const fetchNotes= async()=>{
    const {data}= await axios.get('api/notes');
    setNotes(data);
  }
  useEffect (() => {
    
    fetchNotes();

  },[])
  return (
    <div>
      <MainScreen title="Welcome Back Aditya Goswami">
        <Link to="createnote">
          <Button style={{ marginLeft: 10, marginRight: 10 }}>
            Create new Note{" "}
          </Button>
        </Link>

        {notes.map((note) => (
          <Accordion key={note._id} >
            <Card style={{ margin: 10 }}>
              <Card.Header className="cardHeader">
                <span className="spanTitle">
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </Accordion.Toggle>
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge
                      pill
                      bg="success"
                      className="mx-2"
                      style={{ color: "white" }}
                    >
                      {note.category}
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created On {"  "} date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}

        
      </MainScreen>
    </div>
  );
};

export default MyNotes;
