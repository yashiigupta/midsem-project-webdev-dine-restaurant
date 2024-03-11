const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const yearInput = document.getElementById("year");
const minutesInput = document.getElementById("minutes");
const hoursInput = document.getElementById("hours");

const form = document.getElementById("booking-form");
const nameContainer = document.getElementById("name-input-container");
const emailContainer = document.getElementById("email-input-container");
const dateContainer = document.getElementById("date-input-container");
const timeContainer = document.getElementById("time-input-container");

const nameErrorText = document.getElementById("name-error-text");
const emailErrorText = document.getElementById("email-error-text");
const dateErrorText = document.getElementById("date-error-text");
const timeErrorText = document.getElementById("time-error-text");

const dateHeading = document.getElementById("date-heading");
const timeHeading = document.getElementById("time-heading");

const minusGuestButton = document.getElementById("minus-guest-button");
const plusGuestButton = document.getElementById("plus-guest-button");
let guestNumber = document.getElementById("guest-number");
let guests = 4;

minusGuestButton.addEventListener("click", function addGuest() {
    guests = guests - 1;
    guestNumber.innerText = guests;

    if (guests <= 0) {
        minusGuestButton.disabled = true;
    } else {
        minusGuestButton.disabled = false;
    }
})

plusGuestButton.addEventListener("click", function addGuest() {
    guests = guests + 1;
    guestNumber.innerText = guests;

    if (guests >= 0) {
        minusGuestButton.disabled = false;
    }
})


form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkFormInput();
});

function checkFormInput() {
    const nameWert = nameInput.value.trim();
    const emailWert = emailInput.value.trim();
    const monthWert = monthInput.value.toString();
    const dayWert = dayInput.value.toString();
    const yearWert = yearInput.value.toString();
    const minutesWert = minutesInput.value.toString();
    const hoursWert = hoursInput.value.toString();

    checkNameInput(nameWert);
    checkEmailInput(emailWert);
    checkDateInput(monthWert, dayWert, yearWert);
    checkTimeInput(minutesWert, hoursWert);
}

function checkNameInput(nameWert) {
    if (nameWert === "") {
        nameContainer.classList.add("input-error");
        nameErrorText.style.display = "block";
        nameInput.style.borderBottomColor = "#B54949";
        nameInput.classList.add("input-placeholder");
    }
    else {
        nameContainer.classList.remove("input-error");
        nameErrorText.style.display = "none";
    }
}

function checkEmailInput(emailWert) {
    if (emailWert === "") {
        emailContainer.classList.add("input-error");
        emailErrorText.style.display = "block";
        emailInput.style.borderBottomColor = "#B54949";
        emailInput.classList.add("input-placeholder");
    }
    else {
        emailContainer.classList.remove("input-error");
        emailErrorText.style.display = "none";
    }
}

function checkDateInput(monthWert, dayWert, yearWert) {
    if (monthWert === "") {
        dateContainer.classList.add("input-error");
        dateErrorText.style.display = "block";
        monthInput.style.borderBottomColor = "#B54949";
        dateHeading.style.color = "#B54949";
        monthInput.classList.add("input-placeholder");
    } if (dayWert === "") {
        dateContainer.classList.add("input-error");
        dateErrorText.style.display = "block";
        dayInput.style.borderBottomColor = "#B54949";
        dateHeading.style.color = "#B54949";
        dayInput.classList.add("input-placeholder");
    } if (yearWert === "") {
        dateContainer.classList.add("input-error");
        dateErrorText.style.display = "block";
        yearInput.style.borderBottomColor = "#B54949";
        dateHeading.style.color = "#B54949";
        yearInput.classList.add("input-placeholder");
    } else {
        dateContainer.classList.remove("input-error");
        dateErrorText.style.display = "none";
    }
}


function checkTimeInput(minutesWert, hoursWert) {
    if (minutesWert === "") {
        timeContainer.classList.add("input-error");
        timeErrorText.style.display = "block";
        minutesInput.style.borderBottomColor = "#B54949";
        timeHeading.style.color = "#B54949";
        minutesInput.classList.add("input-placeholder");
    } if (hoursWert === "") {
        timeContainer.classList.add("input-error");
        timeErrorText.style.display = "block";
        hoursInput.style.borderBottomColor = "#B54949";
        timeHeading.style.color = "#B54949";
        hoursInput.classList.add("input-placeholder");
    } else {
        timeContainer.classList.remove("input-error");
        timeErrorText.style.display = "none";
    }
}

document.getElementById('open-popup').addEventListener('click', function () {
document.getElementById('popup').style.display = 'block';
document.querySelector('.popup-container').style.display = 'flex';

const reservationDetails = {
    name: 'Chetan',
    date: '09.05.2024',
    time: '9:30 AM',
    people: 4,
    email: 'chetanamritanshu@gmail.com',
};

document.getElementById('name').innerText = `Name: ${nameInput}`;
document.getElementById('date').innerText = `Date: ${dayInput}`;
document.getElementById('time').innerText = `Time: ${reservationDetails.time}`;
document.getElementById('people').innerText = `People: ${reservationDetails.people}`;
document.getElementById('email').innerText = `Email: ${reservationDetails.email}`;
});

document.querySelector('.close-btn').addEventListener('click', function () {
document.getElementById('popup').style.display = 'none';
document.querySelector('.popup-container').style.display = 'none';
});zz