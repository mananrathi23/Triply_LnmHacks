// Simulated data for travel information
const travelData = {
    fromLocation: "New York",
    toLocation: "Paris",
    travelDate: "2025-05-10",  // Example date
    numPassengers: 4,          // Example passengers
    availableTrains: ["Rajdhani", "Ashram Express", "Garib Rath"]
};

let memberCount = 2; // Track how many members have been added

// Add More Members
function addMember() {
    memberCount++;
    const membersContainer = document.getElementById('members-container');
    const newMemberDiv = document.createElement('div');
    newMemberDiv.classList.add('member');
    newMemberDiv.id = `member${memberCount}`;
    
    const nameInput = `<label for="name${memberCount}">Member ${memberCount} Name:</label><input type="text" id="name${memberCount}" name="name${memberCount}" placeholder="Enter name">`;
    const mobileInput = `<label for="mobile${memberCount}">Member ${memberCount} Mobile:</label><input type="text" id="mobile${memberCount}" name="mobile${memberCount}" placeholder="Enter mobile number">`;

    newMemberDiv.innerHTML = nameInput + mobileInput;
    membersContainer.appendChild(newMemberDiv);
}

// Proceed to Step 2
function proceedToStep2() {
    // Simulate storing the information and moving to Step 2
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    
    prefillBookingForm(); // Prefill the booking form with Step 1 data
}

// Prefill Step 2 with travel information from Step 1
function prefillBookingForm() {
    document.getElementById('from-location').value = travelData.fromLocation;
    document.getElementById('to-location').value = travelData.toLocation;
    document.getElementById('travel-date').value = travelData.travelDate;
    document.getElementById('num-passengers').value = travelData.numPassengers;

    const trainSelect = document.getElementById('available-trains');
    trainSelect.innerHTML = ''; // Clear previous options
    travelData.availableTrains.forEach(train => {
        const option = document.createElement('option');
        option.value = train;
        option.textContent = train;
        trainSelect.appendChild(option);
    });
}

// Proceed to Step 3 (Hotel Booking)
function proceedToStep3() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}
