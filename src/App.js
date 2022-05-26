import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) =>
        this.setState(
          () => {
            return { isLoaded: true, users: result };
          },
          () => {
            console.log(this.state);
          },
          (error) => {
            this.setState({ isLoaded: true, error });
          }
        )
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      return (
        <div className="App">
          {users.map((item) => {
            return <h1 key={item.id}>{item.name}</h1>;
          })}
        </div>
      );
    }
  }
}

export default App;
