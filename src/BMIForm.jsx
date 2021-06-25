import React, { useState } from "react";
import "./App.css";
// https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs

function BMIForm() {
  // State
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(0);

  //  functions
  //function handleSubmit(event) {
  const handleSubmit = (event) => {
    let bmi = weight / Math.pow(height / 100, 2);
    bmi = Math.round(bmi * 10) / 10;
    console.log("gender " + gender);

    if (gender.gender === "male") {
      console.log("gender " + gender.gender);
      bmi = (bmi / 100) * 110;
    }
    setBmi(bmi);

    console.log("bmi: " + bmi);
    //alert("you clicke".bmi);
    event.preventDefault();
  };

  function handleChangeWeight(event) {
    //const handleChangeWeight = (event) => {
    //alert("event value" + event.target.value);
    // console.log("Gewicht: " + event.target.value);

    setWeight(event.target.value);
    console.log("Gewicht: " + weight);
  }

  //const handleChangeHeight = (event) => {
  function handleChangeHeight(event) {
    // console.log("height: " + event.target.value);
    setHeight(event.target.value);
    console.log("height: " + height);
  }

  function handleChangeGender(event) {
    console.log("gender: " + event.target.value);
    setGender({ gender: event.target.value });
    //setGender(event.target.value);
  }
  return (
    <div className="container">
      <div className="form-group row">
        <div className="col-md-6">
          <h1>BMI Berechnung</h1>
          <form /* onSubmit={handleSubmit} */>
            <div className="">
              <label>Gewicht in kg:</label>
              <input
                className="form-control"
                type="text"
                value={weight}
                onChange={
                  handleChangeWeight //value={weight}
                }
              />
            </div>

            <div className="form-group">
              <label>Grösse in cm</label>
              <input
                className="form-control"
                type="text"
                value={height}
                //onChange={handleChangeHeight}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>
            <div className="form-check" onChange={handleChangeGender}>
              <label>Geschlecht: Frau/Mann</label>
              <div class="form-check">
                <input
                  className="form-check-input"
                  id="gender2"
                  name="gender"
                  type="radio"
                  value="female"
                />
                <label class="form-check-label" for="gender2">
                  Frau
                </label>
              </div>
              <div class="form-check">
                <input
                  className="form-check-input"
                  name="gender"
                  type="radio"
                  value="male"
                />
                <label class="form-check-label" for="gender2">
                  Mann
                </label>
              </div>
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              berechnen
            </button>
            <br />
            <br />
            <h4>Ihr Bodymassindex:</h4>
            <h5> {bmi}</h5>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BMIForm;
