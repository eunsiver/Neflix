import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}&${
                        genre ? "&genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token: "Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE4MTM0MzFhYWNjYjYyOTM3YTc0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjc4MjMxOSwiZXhwIjoxNjQzMjE0MzE5fQ.tMXnWvlmBD1coqdaOFHciibMIcqKkL70bXCSAIFAZtk",
                        },
                    }
                );
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]); //배열 안 변수의 값이 변할 때마다 실행하는 코드
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list) => (
                <List list={list} />
            ))}
        </div>
    );
};

export default Home;
