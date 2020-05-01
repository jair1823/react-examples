import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default class SelectAuto extends Component {
  render() {
    return (
      <Autocomplete
        multiple={this.props.multiple}
        disabled={this.props.disabled}
        defaultValue={this.props.value}
        options={this.props.list}
        getOptionLabel={(option) => option.title}
        getOptionSelected={(option, value) => value.id === option.id}
        style={{ width: "100%" }}
        onChange={(e, v) => this.props.onChange(e, v, this.props.name)}
        openText="Desplegar"
        clearText="Borrar"
        closeText="Cerrar"
        loadingText="Cargando..."
        noOptionsText="No hay opciones"
        renderInput={(params) => (
          <TextField {...params} label={this.props.label} variant="outlined" />
        )}
      />
    );
  }
}
