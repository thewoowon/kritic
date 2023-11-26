import styled from "@emotion/styled";

const newsString = `이스라엘의 가자지구 지상군 투입이 초읽기에 들어가면서 이란의 개입 등 확전 가능성에 관심이 쏠리고 있다. 연일 ‘하마스 소탕’을 공언해온 이스라엘과 이스라엘에 ‘선제 조치’를 경고한 이란 모두 ‘두 개의 전선’에 대한 부담감으로 딜레마에 빠진 분위기다.

22일(현지시간) 로이터통신은 복수의 이란 관리들을 인용해 이란 정부가 이스라엘-하마스 전쟁에 어디까지 개입할지를 두고 군사, 외교, 국내적 우선순위를 저울질하고 있다고 보도했다. 이란 최고위 지도자들은 전쟁에 깊숙이 개입할 경우 발생할 수 있는 국내 정치적 리스크와 이란 정부가 그간 추진해온 중동지역 내 패권 전략을 두고 고심하고 있는 것으로 전해졌다.

이란은 그간 팔레스타인 무장정파 하마스·이슬라믹 지하드 뿐만 아니라 레바논의 헤즈볼라, 예멘 내 후티 반군, 시리아 바샤르 아사드 정권 등을 지원하면서 사우디아라비아 등 수니파 국가들과 역내 패권을 다퉈왔다.

예멘의 한 소식통은 “이스라엘의 공격으로 하마스와 이슬라믹 지하드의 팔레스타인 내 권력 기반이 파괴되다면, 이란이 중동 전역에 걸쳐 무장단체를 ‘대리 세력’으로 내세워 구축한 네트워크가 손상될 가능성도 커진다”고 말했다.

이런 상황에서 이란이 이스라엘의 가자지구 공격을 방관한다면, 이슬람 시아파의 ‘맹주’로서 이란이 40년 넘게 구축해온 지역 패권에 균열이 생길 수 있다. 이란이 키워온 ‘대리 세력’들이 이를 이란의 약점으로 인식하게 되고, 동시에 팔레스타인을 오랫 동안 옹호해온 이란의 입지에도 타격이 불가피해진다.

그렇지만 직접 개입에 나서기에는 이란이 직면한 국내외적 상황도 녹록지 않다. 이란 경제는 2018년 도널드 트럼프 미국 행정부가 이란 핵협정 파기 후 대규모 경제 재제를 부활시키며 위기에 빠졌다. 여기에 더해 지난해 ‘히잡 시위’를 비롯한 반정부 시위가 최근까지 이어지고 있다.

이런 상황에서 섣불리 전쟁에 개입했다가 이스라엘과 미국의 반격으로 막대한 군사적 피해을 입을 경우 국민적 분노에 직면할 수 있다. 이란의 한 고위 외교관은 로이터통신에 “이란 최고 지도자인 아야톨라 알리 하메네이에게 최우선 순위는 이슬람공화국의 생존”이라며 “이것이 이란 당국이 이스라엘을 강력한 수사로 비판하면서도 직접적인 군사 개입은 자제해온 이유”라고 말했다.`;

const Content = () => {
  return (
    <Container className="w-full h-[668px] px-[64px] py-[24px] overflow-scroll">
      {newsString.split("\n").map((line, index_1) => {
        if (line.trim() === "") return;
        return (
          <Line key={index_1}>
            {line.split(" ").map((sentence, index_2) => {
              return <Sentence key={index_2}>{sentence}</Sentence>;
            })}
          </Line>
        );
      })}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  height: 668px;
  padding: 24px 64px;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Line = styled.div`
  margin-bottom: 24px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: rgba(255, 80, 80, 0.2);
    border-radius: 4px;
  }
`;

const Sentence = styled.div`
  display: inline-block;
  &:hover {
    cursor: pointer;
    background-color: rgba(135, 140, 255, 0.3);
  }
  padding: 0 2px;
`;

// fill: rgba(135, 140, 255, 0.20);
// fill: rgba(255, 80, 80, 0.20);
// fill: rgba(146, 255, 136, 0.30);
