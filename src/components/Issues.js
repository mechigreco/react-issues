import React from "react";
import { Card } from "react-bootstrap";

class Issues extends React.Component {
    render(){
        return (
          <div className="row">
            <div className="col-md-4 m-3 p-2">
                <Card border="secondary" style={{ width: "38rem" }}>
                <Card.Body>
                    <Card.Title> ISSUE #{this.props.numero+1} </Card.Title>
                    <Card.Link href={this.props.enlace} target="_blank" >{this.props.id}</Card.Link>
                    <Card.Text>{this.props.titulo}</Card.Text>
                    <Card.Text>USER: {this.props.usuario}</Card.Text>
                    <Card.Text>{this.props.labels}</Card.Text>
                </Card.Body>
                </Card>
                </div>
          </div>
        );
    }
}

export default Issues