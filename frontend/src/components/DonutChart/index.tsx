import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "../../types/sale";
import { api } from "../../utils/api";

type ChartData = {
  labels: string[];
  series: number[];
};

export function DonutChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  useEffect(() => {
    async function getChartData() {
      const res = await api.get("/sales/amountBySeller");
      const data = res.data as SaleSum[];
      setChartData({
        labels: data.map((sale) => sale.sellerName),
        series: data.map((sale) => sale.sum),
      });
    }
    getChartData();
  }, []);

  const options = {
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
}
