import React from "react"
import ReactApexChart from "react-apexcharts"

const PieChartMechDesign = () => {
  const series = [44, 55, 41, 17, 15]
  const options = {
    colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
    legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "12px",
      offsetX: 0,
      offsetY: 0,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  }

  return (
    <ReactApexChart options={options} series={series} type="pie" height="150" />
  )
}

export default PieChartMechDesign
