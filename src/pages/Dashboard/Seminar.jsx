import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Seminar = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const data = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet consequatur accusantium deleniti esse totam atque doloribus quidem non dolorem aliquid, debitis tempora maiores est vitae. Pariatur, non enim accusantium aliquam nostrum quaerat sit amet dolorum cupiditate assumenda cum earum labore, id et reprehenderit ipsam voluptatum! Unde explicabo harum exercitationem adipisci delectus aut deserunt voluptate itaque, quos deleniti quam facilis neque tenetur nobis incidunt labore aperiam, eius quasi aspernatur distinctio eligendi dolorem quae. Aut laboriosam veniam voluptatem, iusto quibusdam ipsum? Mollitia dicta deserunt maiores ipsam facere laboriosam fugiat quis, magni minima provident saepe nisi fugit. Eligendi voluptates pariatur sed nihil animi?",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet consequatur accusantium deleniti esse totam atque doloribus quidem non dolorem aliquid, debitis tempora maiores est vitae. Pariatur, non enim accusantium aliquam nostrum quaerat sit amet dolorum cupiditate assumenda cum earum labore, id et reprehenderit ipsam voluptatum! Unde explicabo harum exercitationem adipisci delectus aut deserunt voluptate itaque, quos deleniti quam facilis neque tenetur nobis incidunt labore aperiam, eius quasi aspernatur distinctio eligendi dolorem quae. Aut laboriosam veniam voluptatem, iusto quibusdam ipsum? Mollitia dicta deserunt maiores ipsam facere laboriosam fugiat quis, magni minima provident saepe nisi fugit. Eligendi voluptates pariatur sed nihil animi?",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet consequatur accusantium deleniti esse totam atque doloribus quidem non dolorem aliquid, debitis tempora maiores est vitae. Pariatur, non enim accusantium aliquam nostrum quaerat sit amet dolorum cupiditate assumenda cum earum labore, id et reprehenderit ipsam voluptatum! Unde explicabo harum exercitationem adipisci delectus aut deserunt voluptate itaque, quos deleniti quam facilis neque tenetur nobis incidunt labore aperiam, eius quasi aspernatur distinctio eligendi dolorem quae. Aut laboriosam veniam voluptatem, iusto quibusdam ipsum? Mollitia dicta deserunt maiores ipsam facere laboriosam fugiat quis, magni minima provident saepe nisi fugit. Eligendi voluptates pariatur sed nihil animi?",
        },
    ];

    return (
        <div className="">
            {data.map((i) => (
                <Accordion open={open === i.id}>
                    <AccordionHeader onClick={() => handleOpen(i.id)}>
                        {i.title}
                    </AccordionHeader>
                    <Link to={`/dashboard/seminar/${i.id}`}>
                        <AccordionBody>
                            {i.description.length > 100
                                ? i.description.slice(0, 100) + "..."
                                : i.description}
                        </AccordionBody>
                    </Link>
                </Accordion>
            ))}
        </div>
    );
};

export default Seminar;
