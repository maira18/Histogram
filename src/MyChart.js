import React from 'react';

import Histogram from 'react-chart-histogram';
class MyChart extends React.Component{
render() {
  const labels = ['2016', '2017', '2018','2019','2011','2014','2015','2013','2020','2017','2020'];
  const data = [324, 45, 672,247,88,91,0,9,18,7,700];
  const options = { fillColor: '#5A5757', strokeColor: '#0000FF' };
  return (
    <div style={{marginTop:'260px',marginLeft:'300px'}}>
      <Histogram
          xLabels={labels}
          yValues={data}
          width='800'
          height='400'
          options={options}
      />
    </div>
  )
}
}
export default MyChart;