import React, { Component } from "react";
import SelectAuto from "../SelectAuto/SelectAuto";

export default class Part2 extends Component {
  careers = [
    {
      id: "Turismo",
      title: "Turismo",
    },
    {
      id: "Compu",
      title: "Compu",
    },
    {
      id: "Admi",
      title: "Admi",
    },
  ];
  languages = [
    {
      id: 1,
      title: "Español",
    },
    {
      id: 2,
      title: "Ingles",
    },
  ];

  /* handleSelectChange(event, values) {
    console.log(values);
  } */

  render() {
    //const { url, path } = this.props.match;
    return (
      <div className="part2">
        <div>
          <label htmlFor="career">Carrera</label>
          <SelectAuto
            list={this.careers}
            onChange={this.props.handleSelectChange}
            label="Carrera"
            name={this.props.select1}
          />
        </div>
        {this.props.type && (
          <div>
            <label htmlFor="language">Idioma</label>
            <SelectAuto
              list={this.languages}
              onChange={this.props.handleSelectChange}
              label="Lenguaje"
              name={this.props.select2}
            />
          </div>
        )}
      </div>
    );
  }
}
