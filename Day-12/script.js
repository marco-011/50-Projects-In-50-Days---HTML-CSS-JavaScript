const toggles = document.querySelectorAll('.faq-toggle')
toggles.forEach(toggle =>{
     
    toggle.addEventListener('click',() =>{
       
        toggle.parentNode.classList.toggle('active')

    })
})

//const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {

//         const faq = toggle.parentNode

//         // close others
//         document.querySelectorAll('.faq').forEach(item => {
//             if (item !== faq) {
//                 item.classList.remove('active')
//             }
//         })

//         // toggle current
//         faq.classList.toggle('active')
//     })
// })
