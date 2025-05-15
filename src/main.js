document.body.insertAdjacentHTML('beforeend', `
  <button id="getDataBtn">Get Data</button>
  <button id="convertBtn">Convert Number</button>
  <button id="theMsg">Show Message</button>
`);

document.getElementById('getDataBtn').addEventListener('click', () => {
  google.script.run
    .withSuccessHandler((data) => {
      console.table(data);
      alert('Received data: ' + JSON.stringify(data));
    })
    .withFailureHandler((err) => {
      console.error('Error fetching data:', err);
      alert('Failed to get data: ' + err);
    })
    .getData();
});

document.getElementById('convertBtn').addEventListener('click', () => {
  const input = prompt('Enter a number to convert:');
  const number = parseFloat(input);

  google.script.run
    .withSuccessHandler((result) => {
      console.log('Conversion result:', result);
      alert(`Converted result: ${result}`);
    })
    .withFailureHandler((err) => {
      console.error('Conversion failed:', err);
      alert('Error: ' + err);
    })
    .getConversion(number);
});

document.getElementById('theMsg').addEventListener('click', showMessage)

const showMessage =()=>{
  google.script.run
  .withSuccessHandler((result) => {
    console.log('The message:', result);
    alert(`The message: ${result}`);
  })
  .withFailureHandler((err) => {
    console.error('Message failed:', err);
    alert('Error: ' + err);
  })
  .showMessage()
}
