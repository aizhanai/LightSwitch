import React from "react";
import "./styles.css";
import Lightbulb from "./component/Lightbulb";
import Button from "./component/Lightbulb";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightOn: false
    };
  }
  handleClick = () => {
    this.setState({ isLightOn: !this.state.isLightOn });
  };
  render() {
    const url = this.state.isLightOn
      ? "https://static.scientificamerican.com/sciam/cache/file/2B38DE31-C1D3-4339-8808D61972976EE4.jpg"
      : "https://blockly.webduino.io/media/off.png";
    const btnText = this.state.isLightOn ? "Turn off" : "Turn on";
    return (
      <div className="App">
        <Lightbulb url={url} />
        <Button handleClick={this.handleClick} text={btnText} />
      </div>
    );
  }
}
export default App;
