import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import { useRef, useState } from "react";

export default function List({ list }) {
    const [sliderNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`; //현재 위치에서 계속해서 옆으로 이동시키기 위해 distacne 사용
        }
        if (direction === "right" && sliderNumber < 5) {
            setSliderNumber(sliderNumber + 1);
            listRef.current.style.transform = `translateX(${
                -230 + distance
            }px)`;
        }
        console.log();
    };
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <ListItem index={i} item={item}/>
                    ))}
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}
