//error.error.error();        // ReferenceError: error is not defined

try {
    erorr.error.error();
} catch(e) {
    console.log(e.name);        // ReferenceError
    console.log(e.message);     // error is not defined
}   

