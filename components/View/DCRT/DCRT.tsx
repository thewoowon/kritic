"use client";
import styled from "@emotion/styled";
import Main from "./Main";

const news: News[] = [
  {
    id: 1,
    title: "가계빚 폭주 잡아라… 일부 은행 ‘가산금리 인상’ 검토",
    content: `급증하는 가계대출 증가세를 누그러뜨리기 위해 일부 은행들이 50년 만기 주택담보대출(주담대)에 연령제한을 두기로 한 데 이어 가산금리를 높이는 방안까지 검토하고 있다.

    8일 금융권에 따르면 5대 시중은행(KB국민·신한·하나·우리·NH농협은행)의 지난달 말 가계대출 잔액은 682조 3294억원으로 전월 말(680조 8120억원) 대비 1조 5174억원 늘었다. 신용대출과 전세대출은 줄었지만 주담대가 2조 8591억원 늘어난 영향이다. 10월 들어 지난 5일까지 5대 은행의 가계대출은 1조 1412억원 또 늘었는데 주담대가 4245억원, 신용대출이 7364억원 증가했다.
    
    감독당국은 은행권 대출 실무자들과 매주 점검 회의를 열어 가계대출 억제 방안을 논의하고 있는데, KB국민은행은 최근 내부 회의를 거쳐 오는 13일부터 50년 만기 주담대를 ‘만 34세 이하’에만 내주기로 결정했다. 앞서 해당 상품의 산정 만기를 40년으로 제한해 한도를 줄여 왔으나 이보다 확실하게 수요를 차단하고 나선 것이다.
    
    일부 은행에선 가산금리를 인상하는 방안을 내부적으로 검토하고 나섰는데, 기준금리가 올해 초 한 차례 인상 이후 5회 연속 동결된 점을 감안하면 은행이 붙일 수 있는 위험가중금리인 가산금리를 인상하는 것이 가계대출 억제에 유효한 대책이라고 판단한 것으로 보인다. 실제 한국은행에 따르면 은행의 가계대출 금리(신규 취급액 기준)는 올해 들어 7개월째 대기업 대출보다 낮은 수준을 유지하고 있다.
    
    문제는 가계대출 금리를 상향 조정할 경우 이미 오름세를 보이고 있는 대출 금리가 더 뛰어 실수요 대출자들의 부담이 커질 수 있다는 점이다. 지난 6일 기준 5대 은행의 주담대 혼합형(고정) 금리(은행채 5년물 기준)는 연 4.000~6.471%로 지난 8월 말(연 3.830~6.250%)과 비교해 상단이 0.221% 포인트 뛰었으며, 주담대 변동금리(신규 코픽스 기준)는 연 4.240~7.123%로 상단이 7%를 돌파했다.
    
    은행 관계자는 “예대마진 공시 등을 감안하면 감독당국의 지침 없이 은행이 먼저 가산금리 인상에 나서는 건 쉽지 않은 일”이라고 말했다.
    `,
    journalist: "민나리",
    src: "/static/kritic-static-1.png",
    press: "서울신문",
    date: "2023-10-09",
    url: "https://www.seoul.co.kr/news/newsView.php?id=20231009015010",
    summary: `한국의 일부 은행들이 가계대출 급증을 제어하기 위해 50년 만기
    주택담보대출(주담대)에 연령제한을 두고 가산금리를 높이는 방안을
    검토하고 있다. 가계대출 잔액이 증가하고 있으며, 주담대의 영향으로 인해
    상승했으며, 이에 대응하여 감독당국은 가계대출 억제 방안을 논의하고
    있다. KB국민은행은 50년 만기 주담대를 '만 34세 이하'에만
    내주기로 결정하였고, 일부 은행은 가산금리를 높이는 방안을 검토하고
    있다. 그러나 가계대출 금리를 상향 조정할 경우 대출금 부담이 커질 수
    있어 어려움이 있다고 알려져 있다.`,
  },
];

const DCRT = () => {
  return (
    <Grid>
      <WidthLimit>
        <Main news={news[0]} />
      </WidthLimit>
    </Grid>
  );
};

export default DCRT;

const Grid = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const WidthLimit = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 94px;
`;
