import React, { useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetSeminar } from "../../services";

const SeminarDetail = (count) => {
    const { id } = useParams();
    const [seminarDetail, setSeminarDetail] = useState(null);
    const globalId = Number(localStorage.getItem("seminarId"));

    useEffect(() => {
        GetSeminar().then((res) => {
            console.log("res", res);
            const currentSeminar = res.find((i) => i.id == globalId);
            console.log("current", currentSeminar);
            setSeminarDetail(currentSeminar.mavzu.seminar[0]);
        });
    }, []);

    return (
        <div className="seminar">
            <h1 className="title-seminar">{seminarDetail?.name}</h1>
            <p>{seminarDetail?.title}</p>
        </div>
    );
};

export default SeminarDetail;
