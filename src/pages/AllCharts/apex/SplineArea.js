import React, {useState, useEffect} from "react"
import ReactApexChart from "react-apexcharts"
import pricesApi from "../../../apis/pricesApis"

const Spinearea = () => {
  const [series, setSeries] = useState([])
  const [options, setOptions] = useState([])



  useEffect(() => {
    fetchTweets();
  }, []);


  const fetchTweets = async () => {
    const time = [];
      const value = [];
      

      pricesApi.get("/prices/dai/hourly_data").then(response =>{
          
        let data = response.data.open;
          //console.log("response", data)
          data.map(item => {
            console.log("item", item)
              time.push(item.time);
              value.push(item.value)
          })
          setSeries(value)
          setOptions(time)
          
          console.log("age", time, value)
      }).catch(e => {
          alert(e);
      }) 
  }



  return (
  
    <ReactApexChart
    options={{
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
  
      colors: ["#556ee6", "#34c38f"],
      xaxis: {
        type: "datetime",
        categories: options
      },
      grid: {
        borderColor: "#f1f1f1",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    }} 
    series={[{
      name: "Value",
      data: series,
    }]}
      type="area"
      height="350"
    />

  
  )
}

export default Spinearea
