import { type SchemaTypeDefinition } from "sanity";
import { cardType } from "./schemaTypes/cardType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cardType],
};
