import { Link } from "react-router-dom";
import "./chatBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props ={
    color:string;
    icon:string;
    title:string;
    dataKey:string;
    number:number | string;
    percentage:number;
    chartData:object[];
}

const ChartBox = (dynamic:Props) => {
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          <img src={dynamic.icon} alt="" />
          <span>{dynamic.title}</span>
        </div>
        <h1>{dynamic.number}</h1>
        <Link>View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dynamic.chartData}>
                <Tooltip
                contentStyle={{background:"transparent", border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:10, y:70}}
                />
              <Line
                type="monotone"
                dataKey={dynamic.dataKey}
                stroke={dynamic.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div className="percentage" style={{color: dynamic.percentage<0 ? "tomato":"green"}}>{dynamic.percentage}</div>
          <div className="ratio">Last Month</div>
        </div>
      </div>
    </div>
  );
};
export default ChartBox;
