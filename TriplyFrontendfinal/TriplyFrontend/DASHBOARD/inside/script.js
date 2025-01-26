let peopleCount = 0;

// Theme toggle functionality
function toggleTheme() {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', document.body.dataset.theme);
}

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.dataset.theme = savedTheme;

function addPerson() {
  peopleCount++;
  const peopleList = document.getElementById("peopleList");
  const personDiv = document.createElement("div");
  personDiv.className = "person-item";
  personDiv.innerHTML = `
    <input type="checkbox" id="person${peopleCount}" checked>
    <input type="text" placeholder="Enter name" id="name${peopleCount}">
    <button onclick="removePerson(this)">Remove</button>
  `;
  peopleList.appendChild(personDiv);
}

function removePerson(button) {
  button.parentElement.remove();
}

function getSelectedPeople() {
  const people = [];
  document.querySelectorAll('.person-item').forEach((item, index) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const nameInput = item.querySelector('input[type="text"]');
    if (checkbox.checked) {
      people.push({
        id: index + 1,
        name: nameInput.value || `Person ${index + 1}`
      });
    }
  });
  return people;
}

function openTab(tabName) {
  // Hide all tab contents
  const tabContents = document.getElementsByClassName('tab-content');
  for (let content of tabContents) {
    content.classList.remove('active');
  }

  // Deactivate all tab buttons
  const tabButtons = document.getElementsByClassName('tab-button');
  for (let button of tabButtons) {
    button.classList.remove('active');
  }

  // Show selected tab content and activate button
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');

  // Initialize the appropriate split view
  if (tabName === 'percentageSplit') {
    initializePercentageSplit();
  } else if (tabName === 'unequalSplit') {
    initializeUnequalSplit();
  }
}

function initializePercentageSplit() {
  const selectedPeople = getSelectedPeople();
  if (selectedPeople.length === 0) {
    alert("Please add and select at least one person!");
    return;
  }

  const container = document.getElementById("percentageShares");
  container.innerHTML = "";

  selectedPeople.forEach(person => {
    container.innerHTML += `
      <div class="share-input">
        <input type="number" id="percentage${person.id}" placeholder="Percentage for ${person.name}" min="0" max="100">
        <span>%</span>
      </div>`;
  });
}

function initializeUnequalSplit() {
  const selectedPeople = getSelectedPeople();
  if (selectedPeople.length === 0) {
    alert("Please add and select at least one person!");
    return;
  }

  const container = document.getElementById("unequalShares");
  container.innerHTML = "";

  selectedPeople.forEach(person => {
    container.innerHTML += `
      <div class="share-input">
        <input type="number" id="share${person.id}" placeholder="Amount for ${person.name}">
      </div>`;
  });
}

function splitAmount() {
  const amount = parseFloat(document.getElementById("amount").value);
  const selectedPeople = getSelectedPeople();
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || selectedPeople.length === 0) {
    resultDiv.innerHTML = "<p style='color: red;'>Please enter valid amount and select at least one person!</p>";
    return;
  }

  const splitAmount = (amount / selectedPeople.length).toFixed(2);
  let result = "<p>Equal split:</p>";
  selectedPeople.forEach(person => {
    result += `<p>${person.name}: <strong>₹${splitAmount}</strong></p>`;
  });
  resultDiv.innerHTML = result;
}

function calculatePercentageSplit() {
    const amount = parseFloat(document.getElementById("amount").value);
    const selectedPeople = getSelectedPeople();
    const resultDiv = document.getElementById("result");
    const chartCanvas = document.getElementById("percentageChart");
  
    if (isNaN(amount) || amount <= 0) {
      resultDiv.innerHTML = "<p style='color: red;'>Please enter a valid amount!</p>";
      return;
    }
  
    let totalPercentage = 0;
    const shares = [];
    const labels = [];
    const data = [];
    const colors = [];
  
    selectedPeople.forEach((person, index) => {
      const percentage = parseFloat(document.getElementById(`percentage${person.id}`).value);
      if (isNaN(percentage) || percentage < 0) {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter valid percentages!</p>";
        return;
      }
      totalPercentage += percentage;
      shares.push({
        name: person.name,
        amount: (amount * percentage / 100).toFixed(2),
      });
      labels.push(person.name);
      data.push(percentage);
      colors.push(getRandomColor());
    });
  
    if (Math.abs(totalPercentage - 100) > 0.01) {
      resultDiv.innerHTML = "<p style='color: red;'>Percentages must sum to 100!</p>";
      return;
    }
  
    // Display the calculated shares
    let result = "<p>Split by percentage:</p>";
    shares.forEach((share) => {
      result += `<p>${share.name}: <strong>₹${share.amount}</strong></p>`;
    });
    resultDiv.innerHTML = result;
  
    // Render the pie chart
    new Chart(chartCanvas, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colors,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const percentage = tooltipItem.raw.toFixed(2);
                return `${tooltipItem.label}: ${percentage}%`;
              },
            },
          },
        },
      },
    });
  }
  
  // Function to generate random colors for the pie chart
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

// Add initial person
addPerson();
