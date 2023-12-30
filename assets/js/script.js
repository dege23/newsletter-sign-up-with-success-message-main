const emails = ['doug1@dg.com', 'doug2@dg.com', 'doug3@dg.com']

const elementForm = document.querySelector('#form')
const inpEmail = document.querySelector('#email')
const btnForm = document.querySelector('#btn-form')
const btnSuccess = document.querySelector('#btn-success')

const hasEmail = (entryValue) => {
    let bool = false
    for (let i = 0; i < emails.length; i++) {
        if (entryValue === emails[i]) {
            bool = true
        }
    }
    return bool
}

inpEmail.addEventListener('input', (event) => {
    if (event.target.value.trim() != '') {
        elementForm.classList.remove('error')
    } else {
        elementForm.classList.add('error')
    }
})

btnForm.addEventListener('click', () => {
    if (inpEmail.value.trim() === '') {
        elementForm.classList.add('error')
    } else if (hasEmail(inpEmail.value.trim())) {
        elementForm.classList.add('success')
        inpEmail.value = ''
    } else if (!hasEmail(inpEmail.value.trim())) {
        elementForm.classList.add('error')
    }
})

btnSuccess.addEventListener('click', () => {
    elementForm.classList.remove('success')
})
