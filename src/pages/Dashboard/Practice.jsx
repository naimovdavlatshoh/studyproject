import React, { useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetSeminar } from "../../services";
const Practice = () => {
    const [open, setOpen] = useState(null);
    const [practices, setPractices] = useState([]);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const navigate = useNavigate();

    useEffect(() => {
        GetSeminar().then((res) => {
            setPractices(res);
        });
    }, []);

    const navigateToDetail = (id, globalId) => {
        navigate(`/dashboard/practice/${id}`);
        localStorage.setItem("practiceId", globalId);
    };

    return (
        <div className="">
            {practices?.map((i) =>
                i?.mavzu?.amaliyot?.map((item) => (
                    <Accordion key={item.id} open={open === i.id}>
                        <AccordionHeader onClick={() => handleOpen(i.id)}>
                            {item.name}
                        </AccordionHeader>
                        <div onClick={() => navigateToDetail(item.id, i.id)}>
                            <AccordionBody>
                                {item.title.length > 100
                                    ? item.title.slice(0, 100) + "..."
                                    : item.title}
                            </AccordionBody>
                        </div>
                    </Accordion>
                ))
            )}
        </div>
    );
};

export default Practice;
