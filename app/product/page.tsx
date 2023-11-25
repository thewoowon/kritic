"use client";
import RowGradient from "@/components/svg/RowGradient";
import styled from "@emotion/styled";

const ProductPage = () => {
  return (
    <main className="flex flex-col items-center w-full mx-auto overflow-hidden">
      <Section>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-[30px] w-full justify-end">
            <div className="w-full flex justify-start">
              <RowGradient width={310} height={31} />
            </div>
            <div className="w-full flex justify-end">
              <RowGradient width={310} height={31} />
            </div>
          </div>
          <div className="relative">
            <InnerText className="absolute w-full h-full flex justify-start items-center">
              Always be Awake!
            </InnerText>
            <RowGradient width={1040} height={104} />
          </div>
        </div>
        <div className="w-full flex justify-end py-[30px]">
          <RowGradient width={480} height={48} />
        </div>
        <div className="flex items-baseline">
          <RowGradient />
          <RowGradient width={310} height={31} />
        </div>
        <div className="flex justify-end w-full mt-[66px]">
          <div className="relative">
            <InnerText className="absolute w-full h-full flex justify-start items-center">
              Kritic
            </InnerText>
            <RowGradient width={1040} height={104} />
          </div>
        </div>
        <div className="w-full py-[14px]">
          <RowGradient width={480} height={48} />
        </div>
        <div>
          <RowGradient width={1040} height={104} />
        </div>
      </Section>
    </main>
  );
};

export default ProductPage;

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
  padding: 40px 0;
  max-width: 1440px;
  overflow: hidden;s
`;

const InnerText = styled.div`
  font-size: 72px;
  color: white;
  font-weight: 900;
  padding-left: 32px;
`;
