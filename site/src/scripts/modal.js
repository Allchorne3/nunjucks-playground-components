const setupModal = () => {
    const modalButton = document.querySelector('.jsModalButton')
    const modalCloseButton = document.querySelector('.jsModalClose')
    const modalOverlay = document.querySelector('.modal-overlay')

    if(!modalOverlay) {
        console.warn("No modal can be found")
        return
    }
    if(!modalButton) {
        console.warn("No modal trigger can be found")
        return
    }
    
    modalButton.addEventListener('click', function () {
        document.body.classList.add('modal-is-open')
    })
    
    modalCloseButton.addEventListener('click', function () {
        document.body.classList.remove('modal-is-open')
    })
    
    modalOverlay.addEventListener('click', e => {
        if(!e.target.closest('.modal')) {
            document.body.classList.remove('modal-is-open')
        }
    })

    document.addEventListener('keydown', event => {
        if(event.key === 'Escape') {
            document.body.classList.remove('modal-is-open')
        }
    })
}

export default {
    setupModal
}

// // Add to main JS file
// import Modal from './modal';
// Modal.setupModal()

{/* <div class="modal-overlay jsModalOverlay">
    <div class="modal">
        <div class="modal__content">
            CONTENT HERE
            <button class="modal__close-button jsModalClose">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</div> */}

// .modal-overlay {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 1em;
//     background-color: rgba(0, 0, 0, 0.5);
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     opacity: 0;
//     z-index: -1;
//     transition: 
//     opacity .3s ease,
//     z-index 0s .3s linear;
// }

// .modal-is-open .modal-overlay {
//     opacity: 1;
//     z-index: 999;
//     transition-delay: 0s;
// }
// .modal {
//     display: grid;
//     place-items: center;
//     position: relative;
//     border-radius: 4px;
//     box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.15);
//     color: #fff;
//     min-width: 50vmin;
//     min-height: 50vmin;

//     .modal__content {
//         max-width: 800px;
//         background: $antique-white;
//         color: $black;
//         padding: 2rem;
//         border-radius: $br-medium;

//         p:not(:last-child) {
//             margin-bottom: 1rem;
//         }

//         ol li::marker {
//             font-weight: $fw-700;
//         }
//     }
// }

// .modal__close-button {
//     position: absolute;
//     top: -2rem;
//     right: -2rem;
//     font-size: $fs-6;
//     font-weight: $fw-700;
//     color: $black;
//     z-index: 9;
//     border: none;
//     background: none;

//     &:before {
//         content: "";
//         position: absolute;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%);
//         width: 40px;
//         height: 40px;
//         background: $black;
//         z-index: -1;
//     }
    
//     i {
//         font-size: $fs-0;
//         color: $green;
//         transition: color .3s ease-in-out;

//         &:hover {
//             color: darken($green, 10%);
//         }
//     }
// }

// .modal__close-button:hover,
// .modal__close-button:active,
// .modal__close-button:focus {
//     cursor: pointer;
// }