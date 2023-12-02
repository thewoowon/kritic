import styled from "@emotion/styled";
import { Radar } from "react-chartjs-2";

export const radarOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      min: 680,
      max: 683,
      ticks: {
        // 필요하다면 여기에 더 많은 설정을 추가할 수 있습니다.
      },
    },
  },
};

const radarLabels = ["전전월", "전월"];

export const radarData = {
  labels: radarLabels,
  datasets: [
    {
      label: "가계대출 잔액",
      data: [680.8, 682.3],
      backgroundColor: ["#92FF88", "rgba(48, 56, 255, 0.60)"],
    },
  ],
};

const RadarChart = () => {
  return (
    <Container>
      <Radar data={radarData} options={radarOptions} />
    </Container>
  );
};

export default RadarChart;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  gap: 17px;
`;
