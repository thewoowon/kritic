"use client";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
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

type LatLng = {
  searchString: string;
};

const defaultLatLng = {
  grd_la: 37.3595704,
  grd_lo: 127.105399,
};

const KriticMap = () => {
  const navermaps = useNavermaps();
  const [map, setMap] = useState<{
    setCenter: (latlng: any) => void;
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
    }
  }, [initialLatLng, map]);

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "217px",
        overflow: "hidden",
        position: "relative",
        marginTop: "15px",
        borderRadius: "10px",
      }}
    >
      <NaverMap defaultCenter={initialLatLng} defaultZoom={12} ref={setMap}>
        <Marker
          position={
            new navermaps.LatLng(defaultLatLng.grd_la, defaultLatLng.grd_lo)
          }
          draggable={false}
          onClick={(e) => {
            setOffset({
              x: e.offset.x,
              y: e.offset.y,
            });
          }}
          // 물결처럼 퍼져나가는 애니메이션
          icon={{
            content: `
                <svg class="animate-pulse" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            {selectedMarker !== null && selectedMarker !== undefined && (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="font-normal text-xs">hello</div>
                </div>
                <button
                  className="w-full h-10 bg-[#FFD600] rounded-lg text-white font-bold"
                  onClick={() => {
                    return;
                  }}
                >
                  더보기
                </button>
              </div>
            )}
          </ModalPanel>
        )}
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
  height: 200px;
  background-color: white;
  z-index: 1000;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
