document.querySelector('.trip-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const tripData = {
        destination: document.getElementById('destination').value,
        startFrom: document.getElementById('start-from').value,
        modeOfTransport: document.getElementById('transport').value,
        startDate: document.getElementById('start-date').value,
        endDate: document.getElementById('end-date').value,
        numberOfPeople: parseInt(document.getElementById('num-people').value),
    };

    try {
        const response = await fetch('http://localhost:8080/api/plan-trip/newT', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tripData),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Trip planned successfully!');
            console.log('Trip created:', result);
        } else {
            alert('Failed to create trip.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error while creating trip.');
    }
});

document.getElementById('view-price-btn').addEventListener('click', () => {
    document.querySelector('.estimated-price').classList.toggle('show-premium-message');
});
