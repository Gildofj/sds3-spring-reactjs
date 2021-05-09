import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "../../types/sale";
import { api } from "../../utils/api";
import { round } from "../../utils/format";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

export function BarChart() {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = async () => {
    const res = await api.get("sales/successBySeller");

    const data = res.data as SaleSuccess[];

    setChartData({
      labels: {
        categories: data.map((sale) => sale.sellerName),
      },
      series: [
        {
          name: "% Success",
          data: data.map((sale) =>
            round((100.0 * sale.deals) / sale.visited, 1),
          ),
        },
      ],
    });
  };

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}
