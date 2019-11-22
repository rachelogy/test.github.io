function fetchjson() {
  fetch('https://jsonbox.io/box_58b4614e3b01727b0061')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const element = document.createElement('p');
        element.textContent = `${item.string}`;
        container1.appendChild(element);

        item.array.forEach(V => {
          const element = document.createElement('p');
          element.textContent = `${V.name}--${V.age}--${V.gender}`;
          container2.appendChild(element);
        });
      });
    });
}
