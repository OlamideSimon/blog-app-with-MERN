import React from "react";
import user from "../imgs/user.jpg";

const About = () => {
  return (
    <div className="grid gap-3">
      <div className="flex justify-center">
        <img
          src={user}
          alt=""
          className="rounded-full w-80 h-80"
          draggable={false}
        />
      </div>
      <div className="h-48 overflow-y-scroll font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        delectus non ducimus cum est magnam quaerat consectetur nulla dolor.
        Dolorem optio natus quod commodi odio. Aut quasi sint vitae debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        delectus non ducimus cum est magnam quaerat consectetur nulla dolor.
        Dolorem optio natus quod commodi odio. Aut quasi sint vitae debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        delectus non ducimus cum est magnam quaerat consectetur nulla dolor.
        Dolorem optio natus quod commodi odio. Aut quasi sint vitae
        debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt delectus non ducimus cum est magnam quaerat consectetur nulla
        dolor. Dolorem optio natus quod commodi odio. Aut quasi sint vitae
        debitis!
      </div>
    </div>
  );
};

export default About;
