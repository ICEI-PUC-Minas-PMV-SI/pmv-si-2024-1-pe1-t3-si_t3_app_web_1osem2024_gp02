const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
});

const formatNumber = (event) => {
    if (event.target.value > 0) event.target.value = "R$ " + event.target.value;

    event.target.value = event.target.value.replace(/[^0-9R$,. ]/g, '');
};