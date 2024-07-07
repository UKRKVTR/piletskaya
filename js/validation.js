document.addEventListener('DOMContentLoaded', function () {
  function isValidEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function isValidPhone (phone) {
    const phoneRegex = /^[0-9]{10,15}$/
    return phoneRegex.test(phone)
  }

  function isNotEmpty (value) {
    return value.trim() !== ''
  }

  function validateField (field, isValid) {
    if (isValid) {
      field.classList.remove('invalid')
    } else {
      field.classList.add('invalid')
    }
  }

  function validateForm () {
    const fullName = document.querySelector(
      'input[name="formParams[full_name]"]'
    )
    const email = document.querySelector('input[name="formParams[email]"]')
    const phone = document.querySelector('input[name="formParams[phone]"]')
    const telegramNick = document.querySelector(
      'input[name="formParams[userCustomFields][1667379]"]'
    )

    const isFullNameValid = isNotEmpty(fullName.value)
    const isEmailValid = isValidEmail(email.value)
    const isPhoneValid = isValidPhone(phone.value)
    const isTelegramNickValid = isNotEmpty(telegramNick.value)

    validateField(fullName, isFullNameValid)
    validateField(email, isEmailValid)
    validateField(phone, isPhoneValid)
    validateField(telegramNick, isTelegramNickValid)

    return (
      isFullNameValid && isEmailValid && isPhoneValid && isTelegramNickValid
    )
  }

  function toggleSubmitButton () {
    const submitButton = document.getElementById('button4944478')
    if (validateForm()) {
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
    }
  }

  const fields = [
    'input[name="formParams[full_name]"]',
    'input[name="formParams[email]"]',
    'input[name="formParams[phone]"]',
    'input[name="formParams[userCustomFields][1667379]"]'
  ]

  fields.forEach(function (selector) {
    const field = document.querySelector(selector)
    field.addEventListener('input', toggleSubmitButton)
  })

  toggleSubmitButton()
})
