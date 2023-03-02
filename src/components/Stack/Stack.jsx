import { useEffect } from "react";
import { html5, css3, sass, figma, react } from "../../images/stack/frontend";
import { node, typescript, java } from "../../images/stack/backend";
import { mysql, mongodb, postgresql } from "../../images/stack/databases";
import { angular, graphql, redux } from "../../images/stack/learning";
import { git, uml, trello, scrum } from "../../images/stack/management";
import stackObserver from "./stackObserver";
import Button from "../Button/Button";
import StackItem from "./StackItem";
import "./stack.scss";

function Stack({ scrollToId }) {
  useEffect(() => {
    document.querySelectorAll(".stack-item").forEach((item) => {
      stackObserver.observe(item);
    });
  });

  return (
    <section className="stack" id="stack">
      <div className="stack-container">
        <StackItem
          group="Frontend"
          entersFrom="right"
          items={[html5, css3, sass, figma, react]}
        />
        <StackItem
          group="Backend"
          entersFrom="left"
          items={[node, typescript, java]}
        />
        <StackItem
          group="Databases"
          entersFrom="right"
          items={[mysql, mongodb, postgresql]}
        />
        <StackItem
          group="Learning"
          entersFrom="left"
          items={[angular, graphql, redux]}
        />
        <StackItem
          group="Management"
          entersFrom="right"
          items={[git, uml, trello, scrum]}
        />
      </div>
      <Button scrollToId={scrollToId} to="contact" />
    </section>
  );
}

export default Stack;
