import * as bootstrap from "bootstrap";
import './edit.scss';

document.addEventListener("DOMContentLoaded", () => {

    // Tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popover
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });

    // Toast
    const toastElList = [].slice.call(document.querySelectorAll('.toast'));
    toastElList.forEach(toastEl => {
        new bootstrap.Toast(toastEl).show();
    });

    // Dropdown
    const dropdownList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownList.forEach(dropdownEl => {
        new bootstrap.Dropdown(dropdownEl);
    });

    // Sidebar Toggle
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    // Form submission
    const editForm = document.getElementById("editForm");
    if (editForm) {
        editForm.addEventListener("submit", event => {
            event.preventDefault();
            alert("Changes saved! (Not actually saving, just a simulation)");
        });
    }
});
