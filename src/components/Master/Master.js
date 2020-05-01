import React, { Component } from "react";
import Part1 from "../Part1/Par1";
import Part2 from "../Part2/Part2";
import { Switch, Route } from "react-router-dom";

export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personData: {
        name: "",
        lastname1: "",
        lastname2: "",
        career: "",
        language: "",
      },
      showSubmitBtn: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      personData: {
        ...this.state.personData,
        [name]: value,
      },
    });
  }

  handleSelectChange(event, values, prueba) {
    if (values) {
      this.setState({
        personData: {
          ...this.state.personData,
          [prueba]: values.id,
        },
      });
    } else {
      this.setState({
        personData: {
          ...this.state.personData,
          [prueba]: values,
        },
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = JSON.stringify(this.state.personData);
    alert(data);
  }

  renderInfo(theProps, type) {
    return (
      <div>
        <Part1
          info={this.state.personData}
          handleChange={this.handleChange}
          {...theProps}
        />
        <Part2
          info={this.state.personData}
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
          type={type}
          select1="career"
          select2="language"
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
    const { path } = this.props.match;
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
          <Route
            path={`${path}/invitado`}
            render={(routeProps) => this.renderInfo(routeProps)}
          />
          <Route
            path={`${path}/avanzado`}
            render={(routeProps) => this.renderInfo(routeProps, "avanzado")}
          />
        </Switch>
        {this.state.showSubmitBtn && (
          <button onClick={this.handleSubmit}>Enviar</button>
        )}
      </div>
    );
  }
}
