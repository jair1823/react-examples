import React, { Component } from "react";
import Part1 from "../Part1/Par1";
import Part2 from "../Part2/Part2";
import { Link, Switch, Route } from "react-router-dom";
export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname1: "",
      lastname2: "",
      career: "",
      language: "",
      showSubmitBtn: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const data = JSON.stringify(this.state);
    alert(data);
    event.preventDefault();
  }

  renderInfo(theProps, type) {
    /* this.setState({
      showSubmitBtn: true,
    }); */
    return (
      <div>
        <Part1
          name={this.props.name}
          lastname1={this.props.lastname1}
          lastname2={this.props.lastname2}
          handleChange={this.handleChange}
          {...theProps}
        />
        <Part2
          career={this.state.career}
          language={this.state.language}
          language={this.state.language}
          handleChange={this.handleChange}
          type={type}
          {...theProps}
        />
      </div>
    );
  }

  changeView(event) {
    this.setState({
      showSubmitBtn: true,
    });
    const { url } = this.props.match;
    this.props.history.push(`${url}${event.target.value}`);
  }

  render() {
    const { url, path } = this.props.match;
    /* console.log("Master");
    console.log(url);
    console.log(path); 
    console.log(this.props.match);
    console.log(this.props.location);
    console.log(this.props.history); 
    */

    return (
      <div className="master">
        <h1>Crear estudiante</h1>
        <div>
          <button onClick={this.changeView} value="/invitado">
            Basico
          </button>
        </div>
        <br />
        <div>
          <button onClick={this.changeView} value="/avanzado">
            Avanzad
          </button>
        </div>
        <Switch>
          {
            <Route
              path={`${path}/invitado`}
              render={(routeProps) => this.renderInfo(routeProps)}
            />
          }
          {
            <Route
              path={`${path}/avanzado`}
              render={(routeProps) => this.renderInfo(routeProps, "avanzado")}
            />
          }
        </Switch>
        {this.state.showSubmitBtn && (
          <button onClick={this.handleSubmit}>Enviar</button>
        )}
      </div>
    );
  }
}
