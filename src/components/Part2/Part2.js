import React, { Component } from "react";

export default class Part2 extends Component {
  renderExtraInfo() {}
  render() {
    const { url, path } = this.props.match;
    /* console.log("Part 2");
    console.log(url);
    console.log(path); */
    return (
      <div className="part2">
        <div>
          <label htmlFor="career">Carrera</label>
          <select
            name="career"
            onChange={this.props.handleChange}
            value={this.props.career}
          >
            <option value="" disabled>
              Eliga
            </option>
            <option value="Admin">Admin</option>
            <option value="Turismo">Turismo</option>
            <option value="Compu">Compu</option>
          </select>
        </div>
        {this.props.type && (
          <div>
            <label htmlFor="language">Idioma</label>
            <select
              name="language"
              onChange={this.props.handleChange}
              value={this.props.language}
            >
              <option value="" disabled>
                Eliga
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
