import "./Chart.css";
import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useNavigate } from "react-router-dom";
import { AdminDashboard } from "../../../Services/adminApi";
function ChartDash() {
  const chartRef = useRef(null);
  const [totalFarm, setTotalFarm] = useState();
  const [totalUser, setTotalUser] = useState();
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
    useEffect(() => {
      try {
        AdminDashboard().then((response) => {
            console.log(response,")))))))")
          try {
            setLoading(false);
            if (response.data.loginFail) {
              navigate("/admin/login");
            }
            if (response.data.status) {
              setTotalFarm(response.data.farmCount);
              setTotalUser(response.data.userCount);
            }
          } catch (error) {
            console.log("Internal server error");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

  useEffect(() => {
    if (typeof totalUser !== "undefined" && typeof totalFarm !== "undefined") {
      // Destroy the previous chart instance before creating a new one
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create the new chart instance
      const ctx = document.getElementById("labelChart").getContext("2d");
      const myPieChart = new Chart(ctx, {
        plugins: [ChartDataLabels],
        type: "pie",
        data: {
          labels: ["Customer", "Farms"],
          datasets: [
            {
              data: [totalUser, totalFarm],
              backgroundColor: ["#F7464A", "#46BFBD"],
              hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"],
            },
          ],
        },
        options: {
          // Your chart options here
          responsive: true,
          legend: {
            position: "right",
            labels: {
              padding: 20,
              boxWidth: 10,
            },
          },
          plugins: {
            datalabels: {
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map((data) => {
                  sum += data;
                });
                let percentage = ((value * 100) / sum).toFixed(2) + "%";
                return percentage;
              },
              color: "white",
              labels: {
                title: {
                  font: {
                    size: "16",
                  },
                },
              },
            },
          },
        },
      });

      // Save the chart instance to the ref for future cleanup
      chartRef.current = myPieChart;

      // Cleanup the chart instance when the component is unmounted
      return () => {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
      };
    }
  }, [totalUser, totalFarm]);
  if (!Loading) {
    return (
      <div>
        <div className="screen-container">
          <div>
            <p>Total Details:</p>
            <div className="blockOne">
              User :<span className="Numbers">{` ${totalUser}`}</span>
            </div>
            <div className="blockTwo">
              Farms :<span className="Numbers">{` ${totalFarm}`}</span>
            </div>
          </div>

          <div className="chart-container">
            <canvas id="labelChart" className="chart-canvas"></canvas>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default ChartDash;
