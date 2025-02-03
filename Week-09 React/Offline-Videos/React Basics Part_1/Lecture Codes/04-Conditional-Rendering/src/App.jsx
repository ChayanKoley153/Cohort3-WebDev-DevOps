import { useState } from "react";

function App() {
  <h1></h1>
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      <Greeting name={"raman"}/>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent
              name={"harkirat"}
              subtitle={"20 followers"}
              time={"20m ago"}
              image={
                "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              }
              description={
                "What to know how to win big? Check out how these folks won $6000 in bounties."
              }
            />
          </div>
          <div>
            <div>
              <PostComponent
                name={"raman"}
                subtitle={"Promoted"}
                image={
                  "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                }
                description={
                  "How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

const style = {
  width: 250, backgroundColor: "white",
  borderRadius: 10, borderColor: "gray",
  borderWidth: 1, padding: 20, margin: 10,
};

function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>

          {time !== undefined ? (
            <div style={{ display: "flex"}}>
              <div>{time}</div>
              <img
                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                style={{ width: 20, height: 20 }}
              />
            </div>
          ) : null}
        </div>
      </div>

      <div style={{ fontSize: 12, marginTop: 5 }}>{description}</div>
    </div>
  );
}

const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
}

export default App;
