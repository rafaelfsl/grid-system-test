import VerticalBar from "../../components/VerticalBar/VerticalBar";
import MainLayout from "../../layouts/MainLayout/MainLayout";

const Main = () => {
  return (
    <MainLayout>
      <div className="row">
        <div className="col-12">
          <div className="text-center" style={{ backgroundColor: "gray" }} data-bs-toggle="tooltip" title="Content with col-12">
            Content
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex flex-grow-1" data-bs-toggle="tooltip" title="Usual config - container > row > cols">
        <div className="row flex-grow-1">
          <div className="col" style={{ backgroundColor: "Tomato" }}>
            1
          </div>
          <div className="col" style={{ backgroundColor: "aqua" }}>
            2
          </div>
          <div className="col" style={{ backgroundColor: "lightgreen" }}>
            3
          </div>
          <div className="col" style={{ backgroundColor: "lightblue" }}>
            4
          </div>
          <div className="col" style={{ backgroundColor: "yellow" }}>
            5
          </div>
          <div className="col" style={{ backgroundColor: "orange" }}>
            6
          </div>
          <div className="col" style={{ backgroundColor: "purple", color: "white" }}>
            7
          </div>
          <div className="col" style={{ backgroundColor: "SlateBlue", color: "white" }}>
            8
          </div>
          <div className="col" style={{ backgroundColor: "MediumSeaGreen" }}>
            9
          </div>
          <div className="col" style={{ backgroundColor: "DarkBlue", color: "white" }}>
            10
          </div>
          <div className="col" style={{ backgroundColor: "Olive" }}>
            11
          </div>
          <div className="col" style={{ backgroundColor: "Magenta" }}>
            12
          </div>
        </div>
      </div>
      <div className="row flex-grow-1" data-bs-toggle="tooltip" title="Inner containers - row > cols > containers">
        <VerticalBar num={1} />
        <VerticalBar num={2} color="white" />
        <VerticalBar num={3} />
        <VerticalBar num={4} />
        <VerticalBar num={5} />
        <VerticalBar num={6} />
        <VerticalBar num={7} />
        <VerticalBar num={8} />
        <VerticalBar num={9} />
        <VerticalBar num={10} />
        <VerticalBar num={11} />
        <VerticalBar num={12} />
      </div>
      <div className="row flex-grow-1" data-bs-toggle="tooltip" title="No container (no inner spacing) - row > cols">
        <div className="col" style={{ backgroundColor: "Tomato" }}>
          1
        </div>
        <div className="col" style={{ backgroundColor: "aqua" }}>
          2
        </div>
        <div className="col" style={{ backgroundColor: "lightgreen" }}>
          3
        </div>
        <div className="col" style={{ backgroundColor: "lightblue" }}>
          4
        </div>
        <div className="col" style={{ backgroundColor: "yellow" }}>
          5
        </div>
        <div className="col" style={{ backgroundColor: "orange" }}>
          6
        </div>
        <div className="col" style={{ backgroundColor: "purple", color: "white" }}>
          7
        </div>
        <div className="col" style={{ backgroundColor: "SlateBlue", color: "white" }}>
          8
        </div>
        <div className="col" style={{ backgroundColor: "MediumSeaGreen" }}>
          9
        </div>
        <div className="col" style={{ backgroundColor: "DarkBlue", color: "white" }}>
          10
        </div>
        <div className="col" style={{ backgroundColor: "Olive" }}>
          11
        </div>
        <div className="col" style={{ backgroundColor: "Magenta" }}>
          12
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
