import React, { Component } from "react";
import SelectAuto from "../SelectAuto/SelectAuto";

export default class Part2 extends Component {
  data = [
    {
      id: "Turismo",
      title: "Turismo",
      name: "career",
    },
    {
      id: "Compu",
      title: "Compu",
      name: "career",
    },
    {
      id: "Admi",
      title: "Admi",
      name: "career",
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
            list={this.data}
            onChange={this.props.handleSelectChange}
            label="Carrera"
            name="career"
          />
          {/* <select
            name="career"
            onChange={this.props.handleChange}
            value={this.props.info.career}
          >
            <option value="" disabled>
              No joda
            </option>
            <option value="Admin">Admin</option>
            <option value="Turismo">Turismo</option>
            <option value="Compu">Compu</option>
          </select> */}
        </div>
        {this.props.type && (
          <div>
            <label htmlFor="language">Idioma</label>
            <select
              name="language"
              onChange={this.props.handleChange}
              value={this.props.info.language}
            >
              <option value="" disabled>
                No joda
              </option>
              <option value="L1">Español</option>
              <option value="L2">Ingles</option>
              <option value="L3">Taka Taka</option>
            </select>
          </div>
        )}
      </div>
    );
  }
}
