let count = 1;

const waitAndPrint = (message, delay) => {
    setTimeout(() => {
        console.log(message);
        waitAndPrint("Hello" + " world!".repeat(count), delay);
        count++;
    }, delay);
};

waitAndPrint("Hello world!", 3000);
