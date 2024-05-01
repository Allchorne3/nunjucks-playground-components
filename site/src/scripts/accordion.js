const setupAccordion = () => {
    const accordionContainer = document.querySelector('.accordion-container')

    if(!accordionContainer) {
        console.warn(`No accordion has been found! on the ${window.location.href} page`)
        return;
    }

    // Function to calculate the height of the accordion when opened
    function getContentHeight(accordion) {
        const accordionInner = accordion.querySelector('.accordion-content_inner') 
        if(accordion.classList.contains('is-open')) return 0
        return accordionInner.getBoundingClientRect().height
    }

    // Function to update the accordion. To open the accordion and apply the correct height
    function updateAccordion(accordion, height) {
        const accordionContent = accordion.querySelector('.accordion-content')
        // Update the accordion to open/close
        accordion.classList.toggle('is-open')
        accordionContent.style.height = `${height}px`
    }

    accordionContainer.addEventListener('click', e => {
        const accordionHeader = e.target.closest('.accordion-header')
        if(!accordionHeader) return

        const accordion = accordionHeader.parentElement
        const height = getContentHeight(accordion)
        updateAccordion(accordion, height)
    })
}

export default {
    setupAccordion
}

// Add to main JS file
// import Accordion from 'Scripts/accordion'
// Accordion.setupAccordion();

{/* <div class="accordion-container">
    <div class="accordion" data-theme="cheese">
        <div class="accordion-header">
            <h3 class="accordion__title">Title</h3>

            <div class="accordion-indicator">
                <p class="indicator-plus">+</p>
                <p class="indicator-minus">&mdash;</p>
            </div>
        </div>

        <div class="accordion-content">
            <div class="accordion-content_inner">
                <p>The accordion content is here</p>
            </div>
        </div>
    </div>
    
    <div class="accordion" data-theme="cheese">
        <div class="accordion-header">
            <h3 class="accordion__title">Title</h3>

            <div class="accordion-indicator">
                <p class="indicator-plus">+</p>
                <p class="indicator-minus">&mdash;</p>
            </div>
        </div>

        <div class="accordion-content">
            <div class="accordion-content_inner">
                <p>The accordion content is here</p>
            </div>
        </div>
    </div>
</div> */}

// .accordion {
//     &:not(:last-child) {
//         margin-bottom: .5rem;
//     }

//     &-header {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         width: 100%;
//         padding: 1.5rem 2rem 1.5rem;
//         border: 0;
//         text-align: left;
//         background: lightgrey;
//     }
    
//     &-title {
//         font-size: 1.5rem;
//         text-transform: uppercase;
//         font-weight: bold;
//     }

//     .indicator {
//         &-plus {
//             display: block;
//         }

//         &-minus {
//             display: none;
//         }
//     }
    
//     &.is-open {
//         .indicator {
//             // width: 1rem;

//             &-plus {
//                 display: none;
//             }
    
//             &-minus {
//                 display: block;
//             }
//         }
//     }

//     &-content {
//         height: 0;
//         overflow: hidden;
//         transition: height 0.3s ease-out;

//         &_inner {
//             padding: 2rem;
//         }
//     }
// }