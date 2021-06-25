import React, { Component } from "react";
import "./App.css";
// https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
class BMIForm extends Component {
  constructor() {
    super();
    this.state = { weight: 0, height: 0, gender: "", bmi: "" };
    // constructor binding
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);

    //this.handleChangeWeight = this.handleChangeWeight.bind(this);
  }

  // standard format deklaration
  handleSubmit(event) {
    let bmi = this.state.weight / Math.pow(this.state.height / 100, 2);
    bmi = Math.round(bmi * 10) / 10;
    this.setState({ bmi: bmi });
    console.log("gender" + this.state.gender);
    console.log("bmi:" + bmi);
    //alert("you clicke".bmi);
    event.preventDefault();
  }
  // arrow function format deklaration bind with Class Properties
  handleChangeWeight = (event) => {
    //alert("event value".event.target.value);
    console.log("Gewicht: " + event.target.value);
    this.setState({ weight: event.target.value });
  };

  /* handleChangeWeight(event) {
        //alert("event value".event.target.value);
        console.log("Gewicht: " + event.target.value);
        this.setState({ weight: event.target.value });
    } */

  /* handleChangeHeight = (event) => {
        console.log("height: " + event.target.value);
        this.setState({ height: event.target.value });
    } */

  // bind in render binding, in render creates a function each time it is called!!!
  handleChangeHeight(event) {
    console.log("height: " + event.target.value);
    this.setState({ height: event.target.value });
  }

  handleChangeGender(event) {
    console.log("gender: " + event.target.value);
    this.setState({ gender: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <div className="form-group row">
          <div className="col-md-6">
            <h1>BMI Berechnung</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="">
                <label>Gewicht in kg:</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.weight}
                  onChange={this.handleChangeWeight}
                />
              </div>

              <div className="form-group">
                <label>Grösse in cm</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.height}
                  onChange={
                    this.handleChangeHeight //onChange={this.handleChangeHeight.bind(this)}
                  }
                />
              </div>
              <div className="form-check" onChange={this.handleChangeGender}>
                <label>Geschlecht: Frau/Mann</label>
                <div class="form-check">
                  <input
                    className="form-control"
                    name="gender"
                    type="radio"
                    value="female"
                  />
                </div>
                <div class="form-check">
                  <input
                    className="form-control"
                    name="gender"
                    type="radio"
                    value="male"
                  />
                </div>
                <label class="form-check-label">Female</label>
              </div>
              <button className="btn btn-primary">
                {/* onClick={this.handleSubmit} */}
                berechnen
              </button>
              <p> {this.state.bmi + this.state.gender}</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BMIForm;
