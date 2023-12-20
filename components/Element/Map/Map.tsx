"use client";
import styled from "@emotion/styled";
import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import Satellite from "@/public/svg/satellite.svg";

type LatLng = {
  searchString: string;
};

// 위도 경도
// Latitude and longitude
const defaultLatLng = {
  grd_la: 37.3595704,
  grd_lo: 127.105399,
};

const KriticMap = () => {
  const navermaps = useNavermaps();
  const [map, setMap] = useState<{
    setCenter: (latlng: any) => void;
    centerPoint: any;
  } | null>(null);

  const initialLatLng = useMemo(() => {
    return new navermaps.LatLng(defaultLatLng.grd_la, defaultLatLng.grd_lo);
  }, [navermaps]);

  const [offset, setOffset] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  useEffect(() => {
    if (map) {
      map.setCenter(initialLatLng);
      // centerPoint o.Point {x: 218.3860615111111, y: 99.3219721986739}

      setOffset({
        x: map.centerPoint.x + 60,
        y: map.centerPoint.y,
      });
    }
  }, [initialLatLng, map, navermaps.Event]);

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        borderRadius: "5px",
        border: "0.5px solid #d7d7d7",
      }}
    >
      <NaverMap
        defaultCenter={initialLatLng}
        defaultZoom={12}
        ref={setMap}
        onZoomChanged={(e) => {
          setOffset({
            x: map?.centerPoint.x + 60,
            y: map?.centerPoint.y,
          });
        }}
      >
        <Marker
          position={
            new navermaps.LatLng(defaultLatLng.grd_la, defaultLatLng.grd_lo)
          }
          draggable={false}
          onClick={(e) => {
            toast.success("곧 새로운 기능으로 만나요!", {
              icon: "😆",
              position: "top-center",
              style: {
                borderRadius: "10px",
                background: "#FFFFFF",
                color: "#000000",
              },
            });
          }}
          // 물결처럼 퍼져나가는 애니메이션
          icon={{
            content: `
                <svg id="location-marker" class="animate-pulse" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#C20000" fill-opacity="0.2"/>
                <circle cx="20" cy="20" r="13" stroke="#C20000" stroke-width="2"/>
                <circle cx="20" cy="20" r="9" fill="#C20000"/>
                </svg>
                `,
            anchor: new navermaps.Point(10, 10),
          }}
        />

        {offset.x && offset.y && (
          <ModalPanel x={offset.x} y={offset.y}>
            <div className="flex flex-col">
              <div className="font-semibold text-base">방문 이력 / 메모</div>
              <div className="font-normal text-xs">
                국정 감사 일정에 OO대 이사장이 출장을 핑계로 출석을 거부했다.
                이것은 명백한 회피행위
              </div>
            </div>
          </ModalPanel>
        )}
        <SatelliteDiv>
          <Satellite />
        </SatelliteDiv>
      </NaverMap>
    </MapDiv>
  );
};

export default KriticMap;

const ModalPanel = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: 150px;
  background-color: rgba(135, 140, 255, 0.6);
  z-index: 1000;
  border-radius: 2px;
  padding: 10px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border: 0.5px solid #d7d7d7;
  color: #000000;
`;

const SatelliteDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 3px;
  border: 0.5px solid #d7d7d7;
  background: #fff;
  padding: 6px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
