import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Issues from './components/Issues';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

    state={
      respuesta: []
    }
    issuesBusqueda = ()=>{
        axios.get(`https://api.github.com/repos/facebook/react/issues`)
        .then((response)=>{
          console.log('Los datos obtenidos de la api',response);
          console.log('response.data', response.data);
          this.setState({respuesta : response.data})
          console.log(this.state.respuesta);
          
        })
        .catch((error)=>{
          console.log('Oops algo salio mal', error);
        })
    }

    componentWillMount(){
      console.log('Paso 1');
    }

    componentDidMount(){
      console.log('Aqui se hace la llamada');
      this.issuesBusqueda()
    }

    render(){
      console.log('Muestra resultados en la pantalla');
      return (
        <div className="App">
          <Container className="p-3">
            <h1 className="header"> Reto: React Issues </h1>
          </Container>
          <div className='row'>
            <div className='col-md-4 p-2 m-3'>
              {this.state.respuesta.map((element, index) => (
                <Issues
                  key={element.id}
                  numero= {index}
                  id={element.id}
                  enlace={element.html_url}
                  titulo={element.title}
                  usuario={element.user.login}
                  labels={element.labels.map((l) => l.name)}
                  labelcolor={element.labels.map((color)=> color.color)}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }


}

export default App;
