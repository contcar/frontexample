import React, { Component } from "react";
import Form from "./commons/form";
import Joi from "joi-browser";
import { addCapacity } from "./services/capacitiesServices";

class NewCapacity extends Form {
  state = {
    data: { name: "" },
    errors: {}
  };
  schema = {
    name: Joi.string()
      .min(5)
      .required()
      .label("Name")
  };

  onSubmit = () => {
    const { data } = this.state;
    addCapacity(data);
  };

  render() {
    return (
      <div>
        <h1>Create Capacity</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderButton("Create")}
        </form>
      </div>
    );
  }
}

export default NewCapacity;
