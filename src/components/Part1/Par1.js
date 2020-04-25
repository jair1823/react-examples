import React, { Component } from "react";

export default class Par1 extends Component {
  render() {
    const { url, path } = this.props.match;
    /* console.log("Part 1");
    console.log(url);
    console.log(path); */
    return (
      <div className="part1">
        <div className="part1__item">
          <label>Nombre</label>
          <input
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="part1__item">
          <label htmlFor="lastname1">Apellido 1</label>
          <input
            name="lastname1"
            value={this.props.lastname1}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="part1__item">
          <label htmlFor="lastname2">Apellido 2</label>
          <input
            name="lastname2"
            value={this.props.lastname2}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}
