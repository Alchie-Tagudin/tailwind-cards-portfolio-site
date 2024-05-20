import React from "react";
import { CardType } from "@/typings/CardType";
import Image from "next/image";

type CardProps = CardType;

const Card = (props: CardProps) => {
  const { name, description, url, imageUrl, hashtags } = props;
  const arrHashtags = hashtags?.split(",");
  return (
    <a
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
      href={url}
    >
      <Image
        className="w-full"
        src={imageUrl}
        alt={name}
        width={384}
        height={240}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {arrHashtags?.length &&
          arrHashtags.map((hashTag) => (
            <span
              key={hashTag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{hashTag}
            </span>
          ))}
      </div>
    </a>
  );
};

export default Card;
