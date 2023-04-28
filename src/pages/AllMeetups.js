import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

var products = [];

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/24-big.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://i.pinimg.com/originals/4b/5e/85/4b5e8530c4559375dfc3fd7d1af22ab9.jpg",
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
        //console.log(products);
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

  //console.log(products);
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
