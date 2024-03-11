function showEvent(event, eventImageId, eventDetailsId) {
    const events = document.getElementsByClassName("event-list-item");
    const eventImages = document.getElementsByClassName("event-image");
    const eventDetails = document.getElementsByClassName("event-details");
    let i;

    for (i = 0; i < eventDetails.length; i++) {
        eventDetails[i].style.display = "none";
        eventImages[i].style.display = "none";
    }

    for (i = 0; i < events.length; i++) {
        events[i].className = events[i].className.replace("active", "");
    }
    document.getElementById(eventImageId).style.display = "block";
    document.getElementById(eventDetailsId).style.display = "block";
    event.currentTarget.className += " active";
}

