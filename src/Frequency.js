import React from 'react';
class Frequency extends React.Component{
    state={
        randomArr:[],
        mean:0,
        median:0,
        mode:0
    };
    constructor(props){
    super(props);
    this.setState({
        randomArr:this.props.data
    });
}
    calculateMean(){
        var temp = this.state.randomArr;
        var sum = temp.reduce((previous, current) => current += previous);
        var avg = sum / temp.length;
        this.setState({
            mean:avg
        });
        return avg;
    }
    calculateMode() { 
        var mode = 0;
        var count = 0;
        var temp=this.state.randomArr;
          for(var i = 0; i < temp.length; i++){
            for(var j = 0; j < i; j++){
               if(temp[j] === temp[i]){
                   mode = temp[j];
                   count++;
               }
            }
          }
        this.setState({
            mode:mode
        });
        return mode;
    }

    calculateMedian(){
        var temp=this.state.randomArr;
        temp.sort((a, b) => a - b);
        var lowMiddle = Math.floor((temp.length - 1) / 2);
        var highMiddle = Math.ceil((temp.length - 1) / 2);
        var median = (temp[lowMiddle] + temp[highMiddle]) / 2;
        this.setState({
            median:median
        });
        return median;
    }
    render()
    {
    return (
    <form className="form-horizontal" style={{marginTop:'-300px',marginLeft:'0px',width:'500px'}}>
        <div className="form-group" style={{marginLeft:'550px'}}>
            <div className="col-sm-10" style={{color:'rgb(0,0,0)'}}>
                Mean: <span style={{color:'rgb(0,0,0)',marginLeft:'100px',width:'200px'}}>{this.calculateMean}</span>
            </div>
            <div className="col-sm-10" style={{color:'rgb(0,0,0)',marginTop:'0px'}}>
                Mode: <span style={{color:'rgb(0,0,0)',marginLeft:'100px',width:'200px'}}>{this.calculateMode}</span>
            </div>
            <div className="col-sm-10" style={{color:'rgb(0,0,0)',marginTop:'0px'}}>
                Median: <span style={{color:'rgb(0,0,0)',marginLeft:'100px',width:'200px'}}>{this.calculateMedian} </span>
            </div>
        </div>
    </form>);
    }
}
export default Frequency;