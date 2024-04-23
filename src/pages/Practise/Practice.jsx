import React, { useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetSeminar } from "../../services";

const PracticeDetail = (count) => {
    const { id } = useParams();
    const [practiceDetail, setPracticeDetail] = useState(null);
    const globalId = Number(localStorage.getItem("practiceId"));

    useEffect(() => {
        GetSeminar().then((res) => {
            const currentSeminar = res.find((i) => i.id == globalId);
            setPracticeDetail(currentSeminar.mavzu.amaliyot[0]);
            console.log(currentSeminar.mavzu.amaliyot[0]);
        });
    }, []);

    return (
        <div className="seminar">
            <h1 className="title-seminar">{practiceDetail?.name}</h1>
            <div>
                <video controls>
                    <source src={practiceDetail?.video} type="video/mp4" />
                </video>
            </div>

            <p>{practiceDetail?.title}</p>
        </div>
    );
};

export default PracticeDetail;
