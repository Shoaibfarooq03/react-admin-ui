import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="piechartbox">
      <h1>All Resources</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
            contentStyle={{background:"white",border:"5px"}}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map(item=>(
            <div className="option" key={item.name}>
                <div className="title">
                    <div className="dot" style={{backgroundColor:item.color}}/>
                    <span>{item.name}</span>
                </div>
                <span>{item.value}</span>
            </div>
        ))}
      </div>
    </div>
  );
};
export default PieChartBox;
