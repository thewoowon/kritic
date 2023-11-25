"use client";
import React from "react";
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";

const CONSTANT_ROUTER = [
  { pathname: "/", label: "홈" },
  { pathname: "/product", label: "제품소개" },
  { pathname: "/support", label: "고객센터" },
  { pathname: "/playground", label: "Playground" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Container>
      <Wrapper>
        <Logo
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Kritic
        </Logo>
        <div>
          <Ul>
            {CONSTANT_ROUTER.map((item) => (
              <li
                key={item.pathname}
                onClick={() => router.push(item.pathname)}
                className={pathname === item.pathname ? "active" : ""}
              >
                {item.label}
              </li>
            ))}
            <li>
              <button>KOR</button> | <button>ENG</button>
            </li>
          </Ul>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 52px;
  background-color: #fff;
  border-bottom: 1px solid #f3f3f3;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

const Ul = styled.ul`
  color: #4e5968;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-family: "Pretendard Variable", sans-serif;
  li {
    margin: 0 1rem;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  background-color: #c20000;
  color: #fff;
  padding: 0.5rem 1.3rem;
`;
