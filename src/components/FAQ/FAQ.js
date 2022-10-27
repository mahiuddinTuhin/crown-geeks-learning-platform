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

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mx-20 md:mx-36 lg:mx-48 my-32">
      <Fragment>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is JSX?
          </AccordionHeader>
          <AccordionBody>
            JSX: JSX is a syntax extension to JavaScript. It is used with React
            to describe what the user interface should look like. By using JSX,
            we can write HTML structures in the same file that contains
            JavaScript code. <br />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What is Components?
          </AccordionHeader>
          <AccordionBody>
            Components: Components are the building blocks of any React
            application, and a single app usually consists of multiple
            components. It splits the user interface into independent, reusable
            parts that can be processed separately.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is One-way data-binding?
          </AccordionHeader>
          <AccordionBody>
            One-way data-binding: React’s one-way data binding keeps everything
            modular and fast. A unidirectional data flow means that when
            designing a React app, you often nest child components within parent
            components.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            How do you explain High performance of react?
          </AccordionHeader>
          <AccordionBody>
            High performance: React updates only those components that have
            changed, rather than updating all the components at once. This
            results in much faster web applications.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Can web browsers read JSX directly?
          </AccordionHeader>
          <AccordionBody>
            Web browsers cannot read JSX directly. This is because they are
            built to only read regular JS objects and JSX is not a regular
            JavaScript object For a web browser to read a JSX file, the file
            needs to be transformed into a regular JavaScript object. For this,
            we use Babel
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is the virtual DOM?
          </AccordionHeader>
          <AccordionBody>
            DOM stands for Document Object Model. The DOM represents an HTML
            document with a logical tree structure. Each branch of the tree ends
            in a node, and each node contains objects. virtualdom React keeps a
            lightweight representation of the real DOM in the memory, and that
            is known as the virtual DOM. When the state of an object changes,
            the virtual DOM changes only that object in the real DOM, rather
            than updating all the objects. The following are some of the most
            frequently asked react interview questions.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Why use React instead of other frameworks, like Angular?
          </AccordionHeader>
          <AccordionBody>
            Easy creation of dynamic applications: React makes it easier to
            create dynamic web applications because it provides less coding and
            provides more functionality, whereas, with JavaScript applications,
            code tends to get complex very quickly.
            <br />
            Improved performance: React uses virtual DOM, which makes web
            applications perform faster. Virtual DOM compares its previous state
            and updates only those components in the real DOM, whose states have
            changed, rather than updating all the components — like conventional
            web applications.
            <br />
            Reusable components: Components are the building blocks of any React
            application, and a single app usually consists of multiple
            components. These components have their own logic and controls, and
            they can be reused through the application, which, in turn,
            dramatically reduces the development time of an application.
            <br />
            Unidirectional data flow: React follows a unidirectional data flow.
            This means that when designing a React app, we often nest child
            components within parent components. And since the data flows in a
            single direction, it becomes easier to debug errors and know where
            the problem occurs in an application at the moment.
            <br />
            Dedicated tools for easy debugging: Facebook has released a chrome
            extension that we can use to debug React applications. This makes
            the process of debugging React to web applications faster and
            easier.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            How do you explain High performance of react?
          </AccordionHeader>
          <AccordionBody>
            High performance: React updates only those components that have
            changed, rather than updating all the components at once. This
            results in much faster web applications.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
