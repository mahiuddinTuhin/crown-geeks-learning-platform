import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Blog() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mx-20 md:mx-36 lg:mx-48 my-32">
      <Fragment>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is CORS in web API?
          </AccordionHeader>
          <AccordionBody>
            Cross-origin resource sharing (CORS) is a browser security feature
            that restricts cross-origin HTTP requests that are initiated from
            scripts running in the browser. If your REST API's resources receive
            non-simple cross-origin HTTP requests, you need to enable CORS
            support.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Why are you using Firebase what other options do you have to
            implement authentication?
          </AccordionHeader>
          <AccordionBody>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            How does a Private route work?
          </AccordionHeader>
          <AccordionBody>
            PrivateRoute component is the blueprint for all private routes in
            the application. If the user is logged in, go on and display the
            component in question; otherwise, redirect the user to sign-in page.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is Node and how does it work?
          </AccordionHeader>
          <AccordionBody>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
