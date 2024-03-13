
const container = document.getElementById('feed');
console.log(container);

fetch('MOCK_DATA.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    

  })
  .catch(error => {
    console.error('There was problem', error);
  });
