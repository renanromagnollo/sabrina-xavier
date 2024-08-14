"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";

const PathTag = styled.section`
  /* position: fixed; */
  margin-top: 40px;
  margin-bottom: 5px;
  height: 30px;
  /* padding: 10px; */
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.light.default};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  /* gap: 0; */
  /* margin: 0; */

  > a,
  span {
    /* width: 100%; */
    margin-left: 15px;
    font-family: ${({ theme }) => theme.fonts.h6.fontSize};
    font-size: ${({ theme }) => theme.fonts.h6.fontSize};
    font-weight: bold;
    /* background-color: pink; */
  }

  span {
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.default};
    padding: 100% 10px;
  }
`;

export function Breadcrumbs() {
  const path = usePathname();
  const ways = path.split("/");
  console.log("PathName: ", path);
  console.log("WAys: ", ways);
  return (
    path !== "/" && (
      <PathTag>
        {ways.map((way, i) => {
          console.log("way: ", way);
          if (way === "") {
            return (
              <Link key={i} href={`/`}>
                home
              </Link>
            );
          } else {
            if (i === ways.length - 1) {
              return (
                <>
                  <span>/</span>
                  <span>{way}</span>
                </>
              );
            } else {
              return (
                <>
                  <span>/</span>
                  <Link key={i} href={`/${way}`}>
                    {way}
                  </Link>
                </>
              );
            }
          }
        })}
      </PathTag>
    )
  );
}
