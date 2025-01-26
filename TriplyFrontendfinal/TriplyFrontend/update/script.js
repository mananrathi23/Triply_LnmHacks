function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

function calculateEqualSplit() {
  const totalAmount = parseFloat(document.getElementById('totalAmount').value);
  const numPeople = parseInt(document.getElementById('numPeople').value);

  if (isNaN(totalAmount) || isNaN(numPeople) || numPeople <= 0) {
    document.getElementById('equalResult').textContent = 'Please enter valid values.';
    return;
  }

  const result = totalAmount / numPeople;
  document.getElementById('equalResult').textContent = `Each person gets: ₹${result.toFixed(2)}`;
}
