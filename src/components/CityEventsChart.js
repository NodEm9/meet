import { useState, useEffect } from 'react';
import PropsType from 'prop-types';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [`${data}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length
      const city = location.split(', ')[0]
      return { city, count };
    })
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="City" /> 
        <YAxis type="number" dataKey="count" name="number of events"  />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default CityEventsChart;



// import { useState, useEffect } from 'react';
// import PropsType from 'prop-types';
// import {
//   ScatterChart,
//   Scatter,
//   XAxis, YAxis,
//   ZAxis,
//   Legend,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer
// } from 'recharts';


// const CityEventsChart = ({ allLocations, events }) => {
//   const [data, setData] = useState([]);

//   const data01 = [
//     {
//       "x": 100,
//       "y": 200,
//       "z": 200
//     },
//     {
//       "x": 120,
//       "y": 100,
//       "z": 260
//     },
//     {
//       "x": 170,
//       "y": 300,
//       "z": 400
//     },
//     {
//       "x": 140,
//       "y": 250,
//       "z": 280
//     },
//     {
//       "x": 150,
//       "y": 400,
//       "z": 500
//     },
//     {
//       "x": 110,
//       "y": 280,
//       "z": 200
//     }
//   ];
//   const data02 = [
//     {
//       "x": 200,
//       "y": 260,
//       "z": 240
//     },
//     {
//       "x": 240,
//       "y": 290,
//       "z": 220
//     },
//     {
//       "x": 190,
//       "y": 290,
//       "z": 250
//     },
//     {
//       "x": 198,
//       "y": 250,
//       "z": 210
//     },
//     {
//       "x": 180,
//       "y": 280,
//       "z": 260
//     },
//     {
//       "x": 210,
//       "y": 220,
//       "z": 230
//     }
//   ];

//   useEffect(() => {
//     setData(getData());
//   }, [`${events}`]);

//   const getData = () => {
//     const data = allLocations.map((location) => {
//       const count = events.filter((event) => event.location === location).length
//       const city = location.split(', ')[0]
//       return { city, count };
//     })
//     return data;
//   };

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <ScatterChart
//         width={730}
//         height={250}
//         margin={{
//           top: 20,
//           right: 20,
//           bottom: 10,
//           left: 10,
//         }} 
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="city" type="category" name="City" unit='cm' />
//         <YAxis dataKey="count" type="number" name="number of events" />
//         <ZAxis dataKey="z" type="number" range={[64, 144]} name="score" unit="km" />
//         <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//         <Legend />
//         <Scatter name="A school" data={data01} fill="#8884d8" />
//         <Scatter name="B school" data={data02} fill="#82ca9d" />
//       </ScatterChart>
//     </ResponsiveContainer>
//   );
// }

// export default CityEventsChart


CityEventsChart.propTypes = {
  allLocations: PropsType.array.isRequired,
  events: PropsType.array.isRequired
}