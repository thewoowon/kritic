import Headline1 from "@/public/editor/headline1.svg";
import Headline2 from "@/public/editor/headline2.svg";
import Headline3 from "@/public/editor/headline3.svg";
import Headline4 from "@/public/editor/headline4.svg";
import Headline5 from "@/public/editor/headline5.svg";
import Bold from "@/public/editor/bold.svg";
import Italic from "@/public/editor/italic.svg";
import Underline from "@/public/editor/underline.svg";
import Strike from "@/public/editor/strike.svg";
import Quote from "@/public/editor/quote.svg";
import Link from "@/public/editor/link.svg";
import ImageIcon from "@/public/editor/image.svg";
import NumberedList from "@/public/editor/numbered-list.svg";
import BulletedList from "@/public/editor/bulleted-list.svg";
import NormalAlign from "@/public/editor/normal-align.svg";
import LeftAlign from "@/public/editor/left-align.svg";
import CenterAlign from "@/public/editor/center-align.svg";
import RightAlign from "@/public/editor/right-align.svg";
import ExpandLeftWide from "@/public/editor/expand-left-wide.svg";
import ExpandRightWide from "@/public/editor/expand-right-wide.svg";
import ExpandWide from "@/public/editor/expand-wide.svg";
import FontColor from "@/public/editor/font-color.svg";
import FontBackgroundColor from "@/public/editor/font-background-color.svg";
import Calendar from "@/public/editor/calendar.svg";
import AlignLeftToggle from "@/public/editor/align-left-toggle.svg";
import AlignRightToggle from "@/public/editor/align-right-toggle.svg";
import BottomAdhere from "@/public/editor/bottom-adhere.svg";
import TopAdhere from "@/public/editor/top-adhere.svg";
import Brush from "@/public/editor/brush.svg";
import FountainPen from "@/public/editor/fountain-pen.svg";
import MagicMarker from "@/public/editor/magic-marker.svg";
import Cartesian from "@/public/editor/cartesian.svg";
import Download from "@/public/editor/download.svg";
import Edge from "@/public/editor/edge.svg";
import Eyes from "@/public/editor/eyes.svg";
import TwoPart from "@/public/editor/two-part.svg";
import ThreePart from "@/public/editor/three-part.svg";
import HorizonTwoPart from "@/public/editor/horizon-two-part.svg";
import HorizonThreePart from "@/public/editor/horizon-three-part.svg";
import Icon from "@/public/editor/icon.svg";
import Marker from "@/public/editor/marker.svg";
import News from "@/public/editor/news.svg";
import Pin from "@/public/editor/pin.svg";
import Redo from "@/public/editor/redo.svg";
import Undo from "@/public/editor/undo.svg";
import SpecialTerms from "@/public/editor/special-terms.svg";
import Star from "@/public/editor/star.svg";
import Table from "@/public/editor/table.svg";
import UpperLower from "@/public/editor/upper-lower.svg";

const Controller = () => {
  return (
    <div className="w-full h-[62px] border-b-[0.5px] border-[#D7D7D7] flex flex-col">
      <div className="w-full flex justify-between items-center h-[31px]">
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Headline1 />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Headline2 />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Headline3 />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Headline4 />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Headline5 />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Bold />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Italic />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Underline />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Strike />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Quote />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Link />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <ImageIcon />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <NumberedList />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <BulletedList />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <NormalAlign />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <LeftAlign />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <CenterAlign />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <RightAlign />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <ExpandLeftWide />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <ExpandRightWide />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <ExpandWide />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <FontColor />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <FontBackgroundColor />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Calendar />
        </div>
      </div>
      <div className="w-full flex justify-between items-center h-[31px]">
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <AlignRightToggle />
          {false && <AlignLeftToggle />}
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <BottomAdhere />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <TopAdhere />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Brush />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <FountainPen />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <MagicMarker />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Cartesian />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Download />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Edge />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Eyes />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <TwoPart />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <ThreePart />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <HorizonTwoPart />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <HorizonThreePart />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Icon />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Marker />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <News />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Pin />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Redo />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Undo />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <SpecialTerms />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Star />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <Table />
        </div>
        <div className="p-2 h-[31px] w-[31px] flex justify-center items-center">
          <UpperLower />
        </div>
      </div>
    </div>
  );
};

export default Controller;
