document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.badges').forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the current count
            var count = parseInt(this.innerText);
            // Increment the count by 1
            count++;
            // Update the text of the button
            this.innerText = count;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".select-menu");
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".options .option");
    const sBtn_text = optionMenu.querySelector(".SBtn-text");

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

    options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            console.log(selectedOption);

            // Hide the option menu after selecting an option
            optionMenu.classList.remove("active");
        });
    });
});

// for sales
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".select-menu1");
    const selectBtn1 = optionMenu.querySelector(".select-btn1");
    const options1 = optionMenu.querySelectorAll(".options1 .option1");
    const sBtn_text1 = optionMenu.querySelector(".SBtn-text1");

    selectBtn1.addEventListener("click", () => optionMenu.classList.toggle("active1"));

    options1.forEach(option1 => {
        option1.addEventListener("click", () => {
            let selectedOption1 = option1.querySelector(".option-text1").innerText;
            sBtn_text1.innerText = selectedOption1;
            console.log(selectedOption1);

            // Hide the option menu after selecting an option
            optionMenu.classList.remove("active1");
        });
    });
});


// for design
document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".select-menu2");
    const selectBtn2 = optionMenu.querySelector(".select-btn2");
    const options2 = optionMenu.querySelectorAll(".options2 .option2");
    const sBtn_text2 = optionMenu.querySelector(".SBtn-text2");

    selectBtn2.addEventListener("click", () => optionMenu.classList.toggle("active2"));

    options2.forEach(option2 => {
        option2.addEventListener("click", () => {
            let selectedOption2 = option2.querySelector(".option-text2").innerText;
            sBtn_text2.innerText = selectedOption2;
            console.log(selectedOption2);

            // Hide the option menu after selecting an option
            optionMenu.classList.remove("active2");
        });
    });
});

// main content all brands


document.addEventListener("DOMContentLoaded", function() {
    const Brands = document.querySelector(".brands");
    const Brandoptions = document.querySelectorAll(".brandoption");

    Brands.addEventListener("click", () => {
        Brands.classList.toggle("open");
    });

    Brandoptions.forEach(brandoption => {
        brandoption.addEventListener("click", () => {
            brandoption.classList.toggle("checked");

            const checked = document.querySelectorAll(".checked");
            const Brandsbtn = document.querySelector(".brands .brands-btn");

            if (checked && checked.length > 0) {
                Brandsbtn.innerText = `${checked.length} Selected`;
            } else {
                Brandsbtn.innerText = "All brands";
            }
        });
    });
});









    







    




