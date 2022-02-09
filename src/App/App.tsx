import "./App.css";

import ContainerDimensions from "react-container-dimensions";
import { scaleSequential } from "d3-scale";
import * as chromatic from "d3-scale-chromatic";
import { hot } from "react-hot-loader";

import * as React from "react";
import { result } from "../data/mockData";
import { data as generatedData } from "../data/data";
import TreeMap, { ColorModel } from "../components/TreeMap";
import { NumberOfChildrenPlacement } from "../components/Node";
import GraphMap from "../components/GraphMap/GraphMap";

interface TreeMapInPutData {
  name: string;
  value?: number;
  children?: Array<TreeMapInPutData>;
  className?: string;
}

class App extends React.Component<unknown, { data: TreeMapInPutData, graphType: string }> {
  private treeMapRef: React.RefObject<TreeMap<TreeMapInPutData>>;
  private graphMapRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);
    this.state = {
      data: result,
      graphType: 'treeMap'
    };
    this.treeMapRef = React.createRef();
    this.graphMapRef = React.createRef();
  }

  componentDidMount() {
    
  }

  componentWillUnmount(): void {
    
  }
  public onDetailChartView(){
      console.log('setState view')
      this.setState({
        graphType: 'graphMap'
      })
  }

  public render() {
    const {
      graphType
    }= this.state
    console.log(graphType);
    return (
      <React.Fragment>
        {graphType === 'treeMap' ?
          (<div>
              <ContainerDimensions>
              {({ width }) => {
                return (
                  <TreeMap<TreeMapInPutData>
                    ref={this.treeMapRef}
                    id="myTreeMap"
                    width={width}
                    height={600}
                    data={this.state.data}
                    className="AppTreeMap"
                    nodeClassName="AppTreeMap__node"
                    valueFn={(value: number) => {
                      //console.log(value, value.toString().charAt(0));
                      return `${value.toString().charAt(0)} min`;
                    }}
                    nodeStyle={{
                      fontSize: 12,
                      paddingTop: 2,
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                    numberOfChildrenPlacement={NumberOfChildrenPlacement.TopRight}
                    customD3ColorScale={scaleSequential(
                      chromatic.interpolateSpectral
                    )}
                    colorModel={ColorModel.OneEachChildren}
                    levelsToDisplay={10000}
                    // svgStyle={{fontFamily: "'Courier New', Courier, monospace"}}
                    // nodeStyle={{fill: "black", stroke: "white"}}
                    // disableBreadcrumb={true}
                    // hideNumberOfChildren={true}
                    // hideValue={true}
                    darkNodeBorderColor="silver"
                    darkNodeTextColor="white"
                    lightNodeBorderColor="brown"
                    lightNodeTextColor="brown"
                    onDetailChartView={this.onDetailChartView.bind(this)}
                    // splitRegExp={/(?=[A-Z][^A-Z])/g}
                  />
                );
              }}
            </ContainerDimensions>
            <div>
              <a onClick={() => this.treeMapRef.current.resetZoom()}>Zoom Reset</a>
            </div>
            <div>
              <a onClick={() => this.treeMapRef.current.zoomOut()}>Zoom out</a>
            </div>
            <div>
              <a
                onClick={() => console.log(this.treeMapRef.current.getZoomLevel())}
              >
                Zoom level
              </a>
            </div>
          </div>
          )
          :
          (<div>
              <div>
                <a
                  onClick={() => this.setState({graphType: 'treeMap'})}
                >
                  Back
                </a>
              </div>
              <GraphMap
                ref={this.graphMapRef}
              /> 
            </div>
            )
          }
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
