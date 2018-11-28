import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.updateData()
  }

  updateData = async () => {
    await fetch('http://192.168.11.32:5000/api/v1/getData')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  pump = (v) => {
    fetch('http://192.168.11.32:5000/api/v1/pump', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({'value': v}),
    })
  }

  light = (v) => {
    fetch('http://192.168.11.32:5000/api/v1/light', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({'value': v}),
    })
  }

  fan = (v) => {
    fetch('http://192.168.11.32:5000/api/v1/fan', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({'value': v}),
    })
  }

  render() {
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Quick Data</h1>
          {this.state.data !== null &&
            <div>
              <p className="lead">Humidity: <span className="font-weight-bold">{this.state.data.humidity}</span></p>
              <p className="lead">Moisture: <span className="font-weight-bold">{this.state.data.moisture}</span></p>
              <p className="lead">Temperature: <span className="font-weight-bold">{this.state.data.temperature}</span></p>
            </div>
          }
          <button onClick={this.updateData} type="button" className="btn btn-lg btn-block btn-outline-primary">Update Data</button>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Water Pump</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>control the water pump for the greenhouse</li>
                </ul>
                <button onClick={() => this.pump('on')} type="button" className="btn btn-lg btn-block btn-outline-primary">On</button>
                <button onClick={() => this.pump('off')} type="button" className="btn btn-lg btn-block btn-outline-primary">Off</button>
              </div>
            </div>
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Heat Lamp</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>control the heat lamp for the greenhouse</li>
                </ul>
                <button onClick={() => this.light('on')} type="button" className="btn btn-lg btn-block btn-outline-primary">On</button>
                <button onClick={() => this.light('off')} type="button" className="btn btn-lg btn-block btn-outline-primary">Off</button>
              </div>
            </div>
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Cooling Fan</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>control the cooling fan for the greenhouse</li>
                </ul>
                <button onClick={() => this.fan('on')} type="button" className="btn btn-lg btn-block btn-outline-primary">On</button>
                <button onClick={() => this.fan('off')} type="button" className="btn btn-lg btn-block btn-outline-primary">Off</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
