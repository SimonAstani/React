//https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON
const url = 'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON';



function fetchData() {
    fetch(url)
    .then(res => {
        // Check if the request was successful
         if (!res.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the response as JSON
        return res.json();
        })
    .then(data => {
        // Handle the JSON data
        console.log(data);

    })

    .catch(err => {

 // Handle any errors that occur
    console.error('There has been a problem with your fetch operation:', err);
    });


}

fetchData();


// create necessary element
const div = document.createElement("div");
div.id = "movie";

document.body.appendChild(div);