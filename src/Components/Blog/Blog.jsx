import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div>
      <h3 className="commonHeading">When Use Context API?</h3>
      <p className="answer">
        <FontAwesomeIcon icon={faCircleCheck} style={{ padding: "0 5px" }} />
        Context is primarily used when some data needs to be accessible by many
        components at different nesting levels. <br /> Apply it sparingly
        because it makes component reuse more difficult. If you only want to
        avoid passing some props through many <br /> levels, component
        composition is often a simpler solution than context.
      </p>
      <h3 className="commonHeading">What Is Custom Hook?</h3>
      <p className="answer">
        <FontAwesomeIcon icon={faCircleCheck} style={{ padding: "0 5px" }} />
        A custom hook is a special JavaScript function whose name starts with
        'use' and can be used to call other hooks. <br /> Let's take a look at
        some major differences between a custom React JS hook and <br /> React
        JS components: A custom hook does not require a specific signature.
      </p>
      <h3 className="commonHeading">What Is The Context Of UseRef in React?</h3>
      <p className="answer">
        <FontAwesomeIcon icon={faCircleCheck} style={{ padding: "0 5px" }} />
        In React Docs, it says "useRef returns a mutable ref object whose .
        current property is initialized <br /> to the passed argument
        (initialValue). The returned object will persist for the full lifetime
        of the component." <br /> If you recreate the ContextStore, it will lose
        the ref definitely, but there is no recreate in the example.
      </p>
      <h3 className="commonHeading">
        What Is The Context Of UseMemo in React?
      </h3>
      <p className="answer">
        <FontAwesomeIcon icon={faCircleCheck} style={{ padding: "0 5px" }} />
        The useMemo hook can also be used with React context to optimize the{" "}
        <br />
        result of expensive or complex context updates, you can improve the{" "}
        performance <br /> of components that access context values. By
        memoizing the efficiency and stability of your application
      </p>
    </div>
  );
};

export default Blog;
