import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props={

    title: string;
    color:string;
    dataKey:string;
    chartData:object[];
}

const BarChartBox = (dynamic:Props) => {
  return (
    <div className="barchartbox">
        <h1>{dynamic.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={dynamic.chartData}>
            <Tooltip
            contentStyle={{background:"#2a3447", borderRadius:"5px"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}
            />
          <Bar dataKey={dynamic.dataKey} fill={dynamic.color} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  );
};
export default BarChartBox;
