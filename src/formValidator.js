// formValidator.js

const MOBILE_REGEX = /^09\d{9}$/;

/**
 * نمایش خطا روی input
 */
function setError(input, message) {
    input.classList.add("form-invalid");
    input.setAttribute("aria-invalid", "true");

    const error = input.nextElementSibling;
    if (error) error.textContent = message;
}

/**
 * پاک کردن خطا از input
 */
function clearError(input) {
    input.classList.remove("form-invalid");
    input.removeAttribute("aria-invalid");

    const error = input.nextElementSibling;
    if (error) error.textContent = "";
}

/**
 * پاک شدن خطا هنگام تایپ
 */
function bindLiveValidation(inputs) {
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const value = input.value.trim();

            // فیلد شماره همراه
            if (input.id === "phone") {

                // فقط عدد
                input.value = value.replace(/\D/g, "");

                // خالی → خطا پاک
                if (input.value.length === 0) {
                    clearError(input);
                    return;
                }

                // فقط وقتی معتبر شد خطا پاک شود
                if (MOBILE_REGEX.test(input.value)) {
                    clearError(input);
                }

                return;
            }

            if (value.length >= 3) {
                clearError(input);
            }
        });
    });
}
/**
 * ولیدیشن فرم ثبت‌نام
 */
function initRegisterForm(formId = "registerForm") {
    const form = document.getElementById(formId);
    if (!form) return;

    const firstName = form.querySelector("#firstName");
    const lastName  = form.querySelector("#lastName");
    const phone     = form.querySelector("#phone");

    bindLiveValidation([firstName, lastName, phone]);

    form.addEventListener("submit", event => {
        event.preventDefault();

        let isValid = true;

        [firstName, lastName, phone].forEach(clearError);

        // نام
        if (firstName.value.trim().length < 3) {
            setError(firstName, "لطفاً نام خود را وارد کنید");
            isValid = false;
        }

        // نام خانوادگی
        if (lastName.value.trim().length < 3) {
            setError(lastName, "لطفاً نام خانوادگی خود را وارد کنید");
            isValid = false;
        }

        // موبایل
        const phoneValue = phone.value.trim();

        if (!phoneValue) {
            setError(phone, "لطفاً شماره همراه خود را وارد کنید");
            isValid = false;
        } else if (!MOBILE_REGEX.test(phoneValue)) {
            setError(phone, "شماره همراه معتبر وارد کنید");
            isValid = false;
        }

        if (!isValid) return;

        // داده نهایی
        const formData = {
            name: firstName.value.trim(),
            family: lastName.value.trim(),
            phone: phoneValue,
        };

        console.log("✅ Form Data:", formData);

        alert("✅ درخواست شما با موفقیت ثبت شد!");
        form.reset();
    });
}

export { initRegisterForm };
