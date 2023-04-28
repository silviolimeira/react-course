import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

let products = [];

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  let meetups = DUMMY_DATA;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPodructs, setLoadedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => {
        return response.json();
      })
      .then((content) => {
        //
        products = [];
        for (const key in content.content) {
          const product = {
            id: key,
            ...content.content[key],
          };
          products.push(product);
        }

        if (isLoading) {
          console.log("Loading ...");
          return (
            <section>
              <h1>Loading ...</h1>
            </section>
          );
        }
        setIsLoading(false);
        setLoadedProducts(products);
        console.log(products);
      })
      .catch((erro) => {
        console.log("Fallha ao carregar ...", erro);
        setIsLoading(false);
        return (
          <section>
            <h1>Falha ao carregar ...</h1>
          </section>
        );
      });
  }, [isLoading]);

  console.log(products);
  return (
    <section>
      <h1>All Meetups Page</h1>
      {products.map((product) => (
        <p>{product.id}</p>
      ))}
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
