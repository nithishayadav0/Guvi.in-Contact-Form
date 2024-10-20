document.addEventListener('DOMContentLoaded', () => {
    const formm = document.getElementById('myForm') as HTMLFormElement;
    const formmStatus = document.getElementById('FormStatus') as HTMLElement;

    const setError = (element: HTMLInputElement | HTMLTextAreaElement, message: string) => {
        const inp = element.parentElement as HTMLElement;
        const error = inp.querySelector<HTMLElement>('.error');
        if (error) {
            element.placeholder=message;
        }
        inp.classList.add('error');
        inp.classList.remove('success');
    };

    const setSuccess = (element: HTMLInputElement | HTMLTextAreaElement) => {
        const inp = element.parentElement as HTMLElement;
        const error = inp.querySelector<HTMLElement>('.error');
        if (error) {
            element.placeholder = '';
        }
        inp.classList.add('success');
        inp.classList.remove('error');
    };

    const isValidEmail = (email: string): boolean => {
        const re = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
        return re.test(String(email).toLowerCase());
    };

    formm.addEventListener('submit', async (event) => {
        event.preventDefault();  
        console.log("Form submitted"); // Debugging

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const contactInput = document.getElementById('Contact') as HTMLInputElement;
        const subjectInput = document.getElementById('subject') as HTMLInputElement;
        const messageInput = document.getElementById('message') as HTMLTextAreaElement;

        let formIsValid = true; 

        // Validation checks
        if (nameInput.value.trim() === '') {
            setError(nameInput, "Name is required");
            formIsValid = false;
            console.log("Name validation failed"); // Debugging
        } else {
            setSuccess(nameInput);
        }

        if (emailInput.value.trim() === '') {
            setError(emailInput, "Email is required");
            formIsValid = false;
            console.log("Email validation failed"); // Debugging
        } else if (!isValidEmail(emailInput.value)) {
            setError(emailInput, "Provide a valid email address");
            formIsValid = false;
            console.log("Invalid email format"); // Debugging
        } else {
            setSuccess(emailInput);
        }

        if (contactInput.value.trim() === '') {
            setError(contactInput, "Contact is required");
            formIsValid = false;
            console.log("Contact validation failed"); // Debugging
        } else {
            setSuccess(contactInput);
        }

        if (subjectInput.value.trim() === '') {
            setError(subjectInput, "Subject is required");
            formIsValid = false;
            console.log("Subject validation failed"); // Debugging
        } else {
            setSuccess(subjectInput);
        }

        if (messageInput.value.trim() === '') {
            setError(messageInput, "Message is required");
            formIsValid = false;
        } else {
            setSuccess(messageInput);
        }

        if (formIsValid) {
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                contact: contactInput.value,
                subject: subjectInput.value,
                message: messageInput.value,
            };

            try {
                const response = await fetch('https://6714d0f8690bf212c7629a94.mockapi.io/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    formmStatus.textContent = 'Form submitted successfully!';
                    formmStatus.style.color = 'green';
                    formm.reset();  
                } else {
                    const errorText = await response.text(); // Log error text
                    throw new Error(`Failed to submit form: ${errorText}`);
                }
            } catch (error) {
                const errorMessage = (error as Error).message || 'Unknown error occurred';
                formmStatus.textContent = 'Error submitting form: ' + errorMessage;
                formmStatus.style.color = 'red';
            }
        } else {
            formmStatus.textContent = 'Please fill out all fields correctly.';
            formmStatus.style.color = 'red';
        }
    });
});
