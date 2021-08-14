import React from "react";
import "./App.css";

export default class FetchAiportData extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const url = "http://flare-code-exercise-data.s3.amazonaws.com/airlines.json";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  
  render() {
    return (
    <div>
      {this.state.loading ? <div> Loading...</div> : <div>person...</div>  }
      </div>
    );
}
}
// const Url = "http://flare-code-exercise-data.s3.amazonaws.com/airlines.json";

// function App() {
//   const [Data, setData] = useState({});

//   useEffect(() => {
//     getGitHubUserWithFetch();
//   }, []);

//   const getGitHubUserWithFetch = async () => {};

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>??</h2>
//       </header>
//       <div className="aiport-container">
//         <h5 className="info-item">{Data.Airport.code}</h5>
//         <h5 className="info-item">{Data.location}</h5>
//         <h5 className="info-item">{Data.blog}</h5>
//         <h5 className="info-item">{Data.company}</h5>
//       </div>
//     </div>
//   );
// }

// export default App;