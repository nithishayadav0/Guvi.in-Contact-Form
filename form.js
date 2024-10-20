var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener('DOMContentLoaded', function () {
    var formm = document.getElementById('myForm');
    var formmStatus = document.getElementById('FormStatus');
    var setError = function (element, message) {
        var inp = element.parentElement;
        var error = inp.querySelector('.error');
        if (error) {
            element.placeholder = message;
        }
        inp.classList.add('error');
        inp.classList.remove('success');
    };
    var setSuccess = function (element) {
        var inp = element.parentElement;
        var error = inp.querySelector('.error');
        if (error) {
            element.placeholder = '';
        }
        inp.classList.add('success');
        inp.classList.remove('error');
    };
    var isValidEmail = function (email) {
        var re = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
        return re.test(String(email).toLowerCase());
    };
    formm.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
        var nameInput, emailInput, contactInput, subjectInput, messageInput, formIsValid, formData, response, errorText, error_1, errorMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    console.log("Form submitted"); // Debugging
                    nameInput = document.getElementById('name');
                    emailInput = document.getElementById('email');
                    contactInput = document.getElementById('Contact');
                    subjectInput = document.getElementById('subject');
                    messageInput = document.getElementById('message');
                    formIsValid = true;
                    // Validation checks
                    if (nameInput.value.trim() === '') {
                        setError(nameInput, "Name is required");
                        formIsValid = false;
                        console.log("Name validation failed"); // Debugging
                    }
                    else {
                        setSuccess(nameInput);
                    }
                    if (emailInput.value.trim() === '') {
                        setError(emailInput, "Email is required");
                        formIsValid = false;
                        console.log("Email validation failed"); // Debugging
                    }
                    else if (!isValidEmail(emailInput.value)) {
                        setError(emailInput, "Provide a valid email address");
                        formIsValid = false;
                        console.log("Invalid email format"); // Debugging
                    }
                    else {
                        setSuccess(emailInput);
                    }
                    if (contactInput.value.trim() === '') {
                        setError(contactInput, "Contact is required");
                        formIsValid = false;
                        console.log("Contact validation failed"); // Debugging
                    }
                    else {
                        setSuccess(contactInput);
                    }
                    if (subjectInput.value.trim() === '') {
                        setError(subjectInput, "Subject is required");
                        formIsValid = false;
                        console.log("Subject validation failed"); // Debugging
                    }
                    else {
                        setSuccess(subjectInput);
                    }
                    if (messageInput.value.trim() === '') {
                        setError(messageInput, "Message is required");
                        formIsValid = false;
                    }
                    else {
                        setSuccess(messageInput);
                    }
                    if (!formIsValid) return [3 /*break*/, 8];
                    formData = {
                        name: nameInput.value,
                        email: emailInput.value,
                        contact: contactInput.value,
                        subject: subjectInput.value,
                        message: messageInput.value,
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch('https://6714d0f8690bf212c7629a94.mockapi.io/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    formmStatus.textContent = 'Form submitted successfully!';
                    formmStatus.style.color = 'green';
                    formm.reset();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.text()];
                case 4:
                    errorText = _a.sent();
                    throw new Error("Failed to submit form: ".concat(errorText));
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    errorMessage = error_1.message || 'Unknown error occurred';
                    formmStatus.textContent = 'Error submitting form: ' + errorMessage;
                    formmStatus.style.color = 'red';
                    return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 9];
                case 8:
                    formmStatus.textContent = 'Please fill out all fields correctly.';
                    formmStatus.style.color = 'red';
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    }); });
});
