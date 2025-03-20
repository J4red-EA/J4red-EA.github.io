document.addEventListener("DOMContentLoaded", function() {
    const ticketForm = document.getElementById('ticketForm');
    const seats = document.querySelectorAll('.seat');
    
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            seat.classList.toggle('selected');
        });
    });

    ticketForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cantidad = document.getElementById('cantidadBoletos').value;
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const seatsArray = Array.from(selectedSeats).map(seat => seat.getAttribute('data-seat'));

        if (seatsArray.length !== parseInt(cantidad)) {
            alert(`Por favor selecciona exactamente ${cantidad} asientos.`);
        } else {
            alert(`Has comprado ${cantidad} boletos. Asientos: ${seatsArray.join(', ')}`);
        }
    });
});

