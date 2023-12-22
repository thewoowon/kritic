"use client";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <footer className="bg-[#B10000] min-h-[321px] pt-[70px]">
      <Wrapper>
        <div className="flex justify-between w-full">
          <Logo>Kritic</Logo>
          <div className="flex gap-[32px] items-center">
            <Ul>
              <li>Facebook</li>
              <li>instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </Ul>
            <button className="text-white border border-white px-4 rounded-xl h-[42px] hover:bg-white hover:text-black transition duration-200 ease-in-out">
              Login
            </button>
          </div>
        </div>
        <Divider />
      </Wrapper>
    </footer>
  );
};

export default Footer;

const Logo = styled.div`
  font-weight: 900;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Montserrat", sans-serif;
`;

const Ul = styled.ul`
  color: white;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-family: "Montserrat", sans-serif;
  li {
    margin: 0 1rem;
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;
