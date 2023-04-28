import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    //console.log("addMeetupHandler");
    // TODO: Send http request
    const product = {
      date: "2020-07-20T10:00:00Z",
      description: "The new generation PS5 video game",
      name: "PS5s sdfsf",
      imgUrl: "http://www.localhost/imagem.jpg",
      price: 600.0,
      categories: [
        {
          id: 1,
        },
        {
          id: 3,
        },
      ],
    };
    fetch("http://localhost:8080/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
