import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "0wmyk1t1",
  dataset: "production",
  apiVersion: "2022-08-28",
  useCdn: true,
  token:
    "skkyqQaNVKc9jLZ4D7zqyiOuceqeeqa9qTezX4wGUUY7WeR9rZnI0F9wtREIKsMMg18ZL1VlqwmBII8HL8obnAOIepGrJudnQWnZePvQlwP72SG14J29GoYivPuWZzTJ7NdrzWL4CsUnLqzoWRGa2vu79Il26iMwniQdNOOevfQDrHtdc1aA",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
