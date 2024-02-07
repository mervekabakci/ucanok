$('.emailMask').on('input', function () {
    checkValidity($(this), /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
});
// Telefon numarası maskı: 0 (000) 000-0000
$('.phoneMask').mask('0 (000) 000-0000').on('input', function () {
    var inputValue = $(this).val();

    // Başında 0 yoksa otomatik olarak ekle
    if (inputValue.length > 2 && inputValue.charAt(2) !== '0') {
        inputValue = '0 ' + inputValue.substring(2);
        $(this).val(inputValue);
    }

    // Doğrulama işlemi
    checkValidity($(this), /^0 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/);
});
$('.textMask').mask('A', {
    translation: {
        'A': {
            pattern: /[A-Za-zÇçĞğİıÖöŞşÜü ]/,
            recursive: true
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const inputs = form.querySelectorAll('.textMask, .emailMask, .phoneMask');
            const checkbox = form.querySelector('input[type="checkbox"]');
            const fileInput = form.querySelector('input[type="file"]');

            // Remove previous validation classes
            inputs.forEach(input => {
                input.classList.remove('is-invalid');
            });

            // Remove previous validation class for checkbox
            checkbox.classList.remove('is-invalid');

            fileInput.classList.remove('is-invalid');

            if (form.checkValidity()) {
                // Bootstrap form validation
                if (!form.classList.contains('was-validated')) {
                    form.classList.add('was-validated');
                }

                const formData = new FormData(form);

                $.ajax({
                    type: 'POST',
                    url: form.action,
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (response) {
                        if (response === 'ok') {
                            $('#successModal').removeClass("hide")
                            $('#successModal').addClass("show")
                        } else {
                            $('#successModal').removeClass("hide")
                            $('#successModal').addClass("show")
                        }
                    },
                    error: function () {
                        $('#successModal').removeClass("hide")
                        $('#successModal').addClass("show")
                    }
                });
            } else {
                // Bootstrap form validation
                if (!form.classList.contains('was-validated')) {
                    form.classList.add('was-validated');
                }

                // Add error class to invalid inputs
                inputs.forEach(input => {
                    if (!input.checkValidity()) {
                        input.classList.add('is-invalid');
                    }
                });

                // Add error class to checkbox if not checked
                if (!checkbox.checked) {
                    checkbox.classList.add('is-invalid');
                }
                 // Add error class to file input if no file selected
                 if (fileInput.files.length === 0) {
                    fileInput.classList.add('is-invalid');
                }
            }
        });
    }
});
