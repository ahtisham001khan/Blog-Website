import React from "react";
import {Container} from "react-bootstrap";
import { category  } from "./Data";
import { Link } from "react-router-dom";


export const Catagory_Sidebar = () => {
  return (
    <>
    <Container className="pt-4">
    <div className="G_Catagory d-flex shadow-sm flex-column text-start cata-head ">
    <div className="text-center">
      <span className="heading d-block text-white py-2 fw-bold shadow-sm">
       Catagory
      </span>
    </div>
              <ul className="m-0 p-0">
                  {category.concat(category).map((item, index) => (
                <li  key={index} className="p-2 ">
                <Link to={"/blogpost"}>
                {item.title}
                </Link>
                </li>
                  ))}
              </ul>
            </div>
    </Container>
    </>
  )
}

