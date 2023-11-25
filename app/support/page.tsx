"use client";
import GraphAnimation from "@/components/svg/GraphAnimation";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import GradientCircle from "@/components/svg/GradientCircle";
import Accordion from "@/components/Element/Accordion";
import Image from "next/image";

const tags = [
  {
    id: 1,
    name: "구독 상담",
  },
  {
    id: 2,
    name: "플랜 상담",
  },
  {
    id: 3,
    name: "언론 관계도",
  },
  {
    id: 4,
    name: "명명백백",
  },
  {
    id: 5,
    name: "데카르트",
  },
];

const mmbbList = [
  {
    title: "만평생성",
    content: "DALL·E를 활용한 이미지 생성",
  },
  {
    title: "Drag GPT",
    content: "검색이 필요한 텍스트를 드래그하면 검색 결과를 보여줍니다.",
  },
  {
    title: "Speech to Text",
    content: "녹음된 음성을 텍스트로 변환합니다.",
  },
  {
    title: "Recording",
    content: "웹에서 녹음을 할 수 있습니다.",
  },
  {
    title: "가독성교정 & 읽기 시간 추정",
    content:
      "가독성교정 & 읽기 시간 추정을 통해 더욱 편리하게 작성할 수 있습니다.",
  },
];

const dcrtList = [
  {
    title: "Dynamic Visualizations",
    content: "데이터를 시각화하여 더욱 편리하게 작성할 수 있습니다.",
  },
  {
    title: "Drag GPT",
    content: "검색이 필요한 텍스트를 드래그하면 검색 결과를 보여줍니다.",
  },
  {
    title: "Summarization",
    content: "텍스트를 요약하여 더욱 편리하게 작성할 수 있습니다.",
  },
  {
    title: "팩트 체크",
    content: "팩트 체크를 통해 더욱 정확한 정보를 제공받을 수 있습니다.",
  },
];

type SupportForm = {
  searchString: string;
};

const SupportPage = () => {
  const { register, handleSubmit } = useForm<SupportForm>();

  const onSubmit = (data: SupportForm) => console.log(data);

  return (
    <main className="flex flex-col items-center w-full mx-auto overflow-hidden">
      <Section height="673px">
        <GraphAnimation />
        <div className="text-[#2B2B2B] font-semibold text-[44px] py-[25px]">
          무엇이든 물어보세요!
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="pb-[20px] pt-[10px]">
          <input
            type="text"
            placeholder="키워드로 입력하시면 더욱 좋아요!"
            {...register("searchString")}
            className="w-[698px] h-[60px] border border-[#B4B4B4] rounded-md px-[20px] py-[10px] outline-none"
            autoComplete="off"
          />
        </form>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </Tags>
      </Section>
      <Section height="368px" bgColor="#F9FAFB">
        <Flex>
          <div className="flex flex-col gap-[40px]">
            <div className="font-bold text-[36px]">
              상담원과 통화가 필요한가요?
              <br /> 챗봇도 활용해보세요!
            </div>
            <div className="text-[#2B2B2B] text-[18px] leading-[30px]">
              빠른 상담 전화 <br />
              <span className="font-bold">010-6566-3684</span>
            </div>
          </div>
          <GradientCircle size={232} />
        </Flex>
      </Section>
      <Section height="480px" className="max-w-[698px]">
        <Flex justifyContent="flex-start" alignItems="flex-start">
          <Title>명명백백 200% 활용하기</Title>
        </Flex>
        <div className="w-full font-light text-[24px] py-2">
          이토록 완벽한 에디터가 있었나요?
        </div>
        <Accordion list={mmbbList} />
      </Section>
      <Section height="368px" bgColor="#FFFFFF">
        <Flex>
          <div className="rounded-full overflow-hidden">
            <Image
              src={
                "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ce3e7354-26bb-4af9-d818-10e987315600/public"
              }
              alt="데카르트"
              width={232}
              height={232}
            />
          </div>
        </Flex>
      </Section>
      <Section height="480px" className="max-w-[698px]">
        <Flex justifyContent="flex-start" alignItems="flex-start">
          <Title>데카르트 200% 활용하기</Title>
        </Flex>
        <div className="w-full font-light text-[24px] py-2">
          AISNR(AI-driven Sustainable News Reading)을 체험해보세요.
        </div>
        <Accordion list={dcrtList} />
      </Section>
    </main>
  );
};

export default SupportPage;

const Section = styled.section<{
  bgColor?: string;
  height?: string;
}>`
  width: 100%;
  min-height: ${(props) => props.height || "100vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  font-family: "Pretendard Variable", sans-serif;
  padding: 40px 0;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  padding: 5px 15px;
  border-radius: 20px;
  background-color: #db6666;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #c55c5c;
  }
`;

const Flex = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "100%"};
  gap: 40px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: #2b2b2b;
  margin-bottom: 20px;
`;
