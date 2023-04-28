import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    console.log("addMeetupHandler");
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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI3NzYxOTUsInVzZXJfbmFtZSI6ImFsZXhAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9PUEVSQVRPUiJdLCJqdGkiOiI4NzE2ZDA2My05ZTBmLTQ3MGQtOWQ1Zi01M2YyMWE5NjEwYTEiLCJjbGllbnRfaWQiOiJkc2NhdGFsb2ciLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.lMTf31o31-13N6N5RTUeqJL6i4kaVr7ZE-SK1-iRuV4",
      },
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
