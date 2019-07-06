import React from 'react';
import ActionButton from "./ActionButton";
import Histogram from 'react-chart-histogram';
import Frequency from './Frequency';
class MyInput extends React.Component{
    state ={
        min: 3, 
        max: 15,
        randomArr:[]
      }
    handleMinOnChange(e) {
        this.setState({
          min: e.target.value
        });
      }
      handleMaxOnChange(e) {
            this.setState({
            max: e.target.value
        });
      }
    setvalue(){
        this.setState({
            max: parseInt(this.state.max),
            min: parseInt(this.state.min)
        });
    }

    randomArray(){
       var arr=[];
       var ran=parseInt((Math.random()*(this.state.max+this.state.min))+this.state.min)%this.state.max+1;
       for (var i=0;i<14;)
       {
           if(ran>=this.state.min && ran<=this.state.max)
           {
                arr.push(ran);
                i++;
           }
           ran=parseInt((Math.random()*(this.state.max+this.state.min))+this.state.min)%this.state.max+1;
       }
       arr.push(this.state.max);
       this.setState({
           randomArr:arr
       });

    }

    render()
    {
        const labels = ['0', '1', '2','3','4','5','6','7','8','9','10','11','12','13','14'];
        const options = { fillColor: '#5A5757', strokeColor: '#0000FF' };
        return(
            <div>
                <label>Lower Limit</label><input value={this.state.min} onChange={ (e) => this.handleMinOnChange(e) } class="form-control" id="data1" type="number" style={{width:'200px',marginTop:'20px'}} />
                <label style={{marginTop:'50px'}}>Upper Limit</label><input value={this.state.max} onChange={ (e) => this.handleMaxOnChange(e) } class="form-control" id="data2" type="number"style={{width:'200px'}} />
                <ActionButton text="Calculate" callBack={this.randomArray.bind(this)} />
                <p>{this.state.min}</p>
                <p>{this.state.max}</p>
                <Frequency data={this.state.randomArr}/>
                <div style={{marginLeft:'300px'}}>
                <Histogram
                    xLabels={labels}
                    yValues={this.state.randomArr}
                    width='800'
                    height='400'
                    options={options}
                />
                </div>
            </div>
        );
    }
}
export default MyInput;