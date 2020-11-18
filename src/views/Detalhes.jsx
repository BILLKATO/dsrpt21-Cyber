//Core do React
import React from "react";
//Plugin para criação de Gráficos
import { Bar } from "react-chartjs-2";
//Componentes do Reactstrap
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
//Importa dados estáticos do arquivo de váriaveis
import { dashboardNASDAQChart } from "variables/charts.jsx";
//Componente de navegação do Routes
import { NavLink, Link } from "react-router-dom";
//Importa rotas do navegador do arquivo de rotas
import { routes } from "routes.js";
//Importa Componte de tabelas do ReactTable
import ReactTable from "react-table";
//Historico de navegação
import history from "config/history";
//Funções para chamada de API
import api from "../services/api";


class Detalhes extends React.Component {
  //Habilita o recebimento de props pelo component com super e declara variáveis de estado
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      descricao: "AGUARDE... CARREGANDO...",
      local: "",
      dados_comp: "AGUARDE... CARREGANDO...",
    };
  }

  //Executa a requesição ao servidor antes do componente ser renderizado
  async componentDidMount() {
  
  var local = (this.props.match.params.local).toString().split("%20").join("||");

    await api.get("/monitoramento/"+this.props.match.params.email+"/"+local).then((response)=>{
      console.log(response.data);
      this.setState({descricao: response.data[0].descricao})
      this.setState({dados_comp: response.data[0].dados_comp})
    });    
  }
 
  
  
  //Retorna o HTML que será usado pelo componente
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <hr />
                  <CardTitle tag="h5">EMAIL</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>            
                   {this.props.match.params.email} 
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />                  
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <hr />
                  <CardTitle tag="h5">LOCAL VAZADO</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>            
                   {this.props.match.params.local} 
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />                  
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <hr />
                  <CardTitle tag="h5">DESCRICAO</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>            
                   {this.state.descricao} 
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />                  
                </CardFooter>
              </Card>
            </Col>
          </Row> 
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <hr />
                  <CardTitle tag="h5">DADOS COMPROMETIDOS</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>            
                   {this.state.dados_comp}
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />                  
                </CardFooter>
              </Card>
            </Col>
          </Row>           
        </div>
      </>
    );
  }
}

//Exporta por padrão o objeto Renovacoes
export default Detalhes;
