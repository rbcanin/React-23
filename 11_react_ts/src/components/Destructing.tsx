import React from "react";

type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  category: Category;
};

export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P = "Pyton",
}

const Destructing = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{content}</h2>
      <h2>Quantidade de comentários: {commentsQty}</h2>
      <div>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
      <h2>Category: {category} </h2>
    </div>
  );
};

export default Destructing;
