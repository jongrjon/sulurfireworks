const goToMapButton = document.getElementById('goToMapButton');
    const mapSection = document.getElementById('map-section');

    window.addEventListener('scroll', () => {
        const mapRect = mapSection.getBoundingClientRect();
        const mapHeight = mapRect.height || mapSection.offsetHeight; // Get the map height
        const mapVisible = mapRect.top < window.innerHeight - mapHeight / 3 && mapRect.bottom > mapHeight / 3;
        const isBelowMap = mapRect.top < 0 && mapRect.bottom < window.innerHeight; // Check if below the map

        if (!mapVisible) {
            goToMapButton.style.display = 'flex'; // Show button
            if (isBelowMap) {
                goToMapButton.innerHTML = '<i class="fas fa-map-marker-alt"></i> Go to Map <i class="fas fa-arrow-up"></i>';
            } else {
                goToMapButton.innerHTML = '<i class="fas fa-map-marker-alt"></i> Go to Map <i class="fas fa-arrow-down"></i>';
            }
        } else {
            goToMapButton.style.display = 'none'; // Hide button
        }
    });

    goToMapButton.addEventListener('click', () => {
        const mapRect = mapSection.getBoundingClientRect();
        const mapCenter = mapRect.top + mapRect.height / 2; // Calculate the map's center relative to the viewport
        const scrollOffset = mapCenter - window.innerHeight / 2; // Adjust so the map center aligns with viewport center
        window.scrollBy({ top: scrollOffset, behavior: 'smooth' }); // Smoothly scroll to the calculated offset
    });