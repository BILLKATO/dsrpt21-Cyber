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


class Renovacoes extends React.Component {
  //Habilita o recebimento de props pelo component com super e declara variáveis de estado
  constructor(props) {
    super(props);
    this.state = {
      lista:[{ email: "" }],
      monitoramento: [{ email: "" }],
      atualizar: "nao"
    };
  }

  //Executa a requesição ao servidor antes do componente ser renderizado
  async componentDidMount() {

    await api.get("/email").then((response)=>{
      console.log(response.data);
      this.setState({lista: response.data})
    });    

    await api.get("/monitoramento").then((response)=>{
      console.log(response.data);
      this.setState({monitoramento: response.data})
    }); 
  }
   
  
  inserir()
  {
      api.post("inserir", {
          email: document.getElementById("email").value,
        })
        .then((response) => {
          console.log(response);
        });
        this.setState({atualizar: "sim"});
  }
  
  monitorar()
  {
    api.get("/buscar").then((response)=>{
        window.alert(response.data);
    });   
    
    document.getElementById("btnmonit").disabled = true;
    
    setTimeout(function(){document.getElementById("btnmonit").disabled = false;},600000);
    setTimeout(this.setState({atualizar: "sim"}),60000);

  }
  
  
 async componentDidUpdate() {
 
    if(this.state.atualizar == "sim")
    {    
    	await api.get("/email").then((response)=>{
    	  console.log(response.data);
    	  this.setState({lista: response.data})
    	});    

    	await api.get("/monitoramento").then((response)=>{
    	  console.log(response.data);
    	  this.setState({monitoramento: response.data})
    	});
    	
    	this.setState({atualizar: "nao"});
    }

  }

  //Retorna o HTML que será usado pelo componente
  render() {
    var data = this.state.lista;

    const columns = [
      {
        Header: "Email",
        accessor: "email",
      },
    ];

    var data2 = this.state.monitoramento;

    const columns2 = [
      {
        Header: "Email",
        accessor: "email",
          Cell: (e) => (
            <Link
              to={{
                pathname: "/admin/detalhes/" + e.row.local_vazado + "/"+e.value,
                aboutProps: {
                  local: e.row.local_vazado,
                  email: e.value,
                },
              }}
            >
              {e.value}
            </Link>
          ),        
      },
      {
        Header: "Local Vazado",
        accessor: "local_vazado",
      },
      {
        Header: "descricao",
        accessor: "descricao",
      },
      {
        Header: "Dados Comprometidos",
        accessor: "dados_comp",
      },
    ];

    //Adiciona o filtro case insensitive na tabela
    const filterCaseInsensitive = ({ id, value }, row) => (row[id] ? row[id].toLowerCase().includes(value.toLowerCase()) : true);

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <hr />
                  <CardTitle tag="h5">ADICIONAR EMAIL NA LISTA</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <input type="text" id="email"/>
                   <button onClick={() => this.inserir()}>
                    Adicionar
                   </button>                    
                  </Row>
                </CardBody>
                <CardFooter>
                 <Row>
                  <Col>
                   <button id="btnmonit" onClick={() => this.monitorar()}>
                    Monitorar
                   </button>
                  </Col>                  
                 </Row>
                  <hr />                  
                </CardFooter>
              </Card>
            </Col>
          </Row>          
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Todos os Emails Monitorados</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    defaultFilterMethod={filterCaseInsensitive}
                    filterable={true}
                    showPageSizeOptions={false}
                    defaultPageSize={10}
                    PaginationComponent={ReactTable.Pagination}
                    showPagination={true}
                    showPaginationBottom={true}
                    data={data}
                    columns={columns}
                  />
                 <hr />   
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Col>
          </Row>        
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Status E-mails</CardTitle>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    defaultFilterMethod={filterCaseInsensitive}
                    filterable={true}
                    showPageSizeOptions={false}
                    defaultPageSize={10}
                    PaginationComponent={ReactTable.Pagination}
                    showPagination={true}
                    showPaginationBottom={true}
                    data={data2}
                    columns={columns2}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

//Exporta por padrão o objeto Renovacoes
export default Renovacoes;
