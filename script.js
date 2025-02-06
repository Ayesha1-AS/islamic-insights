
let reviews = [];

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review').value;

   
    const review = {
        name: name || 'Anonymous',
        email: email || 'Not provided',
        rating: rating,
        reviewText: reviewText,
        date: new Date().toLocaleString()
    };

  
    reviews.push(review);

    document.getElementById('reviewForm').reset();


    displayReviews();
});


function displayReviews() {
    const reviewsDisplay = document.getElementById('reviewsDisplay');
    reviewsDisplay.innerHTML = '';

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `
            <strong>${review.name}</strong> (${review.date})<br>
            Rating: ${review.rating}<br>
            <p>${review.reviewText}</p>
        `;
        reviewsDisplay.appendChild(reviewDiv );
    });
}