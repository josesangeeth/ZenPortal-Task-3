// Creating data in JSON format
var resume = {
    name : "Jose Irudaya Sangeeth",
    dob : "14-05-1993",
    qualification : "MCA",
    year : 2016,
    college : "Thiagarajar college",
    experience : "fresher",
    AreaofIntrest : "software Development",
    email : "josesangeeth14@gmail.com",
    city : "madurai"
};

// TO print all the data from json using ( for in )
for (let x in resume) {
    console.log(x + ": "+ resume[x])
 }

// TO print all the data from json using ( for of )
 for (var key of Object.keys(resume)) {
    console.log(key + " -> " + resume[key])
}

// TO print all the data from json using ( for each )
Object.keys(resume).forEach(key => 
    {
        let value = resume[key];
        console.log(key +": "+ value);
    });

/*
JavaScript: window, document and screen 

Window:
The JavaScript window object sits at the top of the JavaScript Object hierarchy and represents the browser 
window. The window object is supported by all browsers. All global JavaScript objects , functions, and 
variables automatically become members of the window object. The window is the first thing that gets loaded 
into the browser . This window object has the majority of the properties like length, innerWidth, 
innerHeight, name, if it has been closed, its parents, and more.

Document:
The Document interface represents any web page loaded in the browser and serves as an entry point into the 
web page's content, which is the DOM tree. When an HTML document is loaded into a web browser , it becomes 
a document object. It is the root node of the HTML document. The document actually gets loaded inside the 
window object and has properties available to it like title, URL, cookie, etc. HTML documents, served with the
"text/html" content type, also implement the HTMLDocument interface, whereas XML and SVG documents implement 
the XMLDocument interface.

Screen :
Screen is a small information object about physical screen dimensions . It can be used to display screen width, 
height, colorDepth, pixelDepth etc. It is not mandatory to write window prefix with screen object.

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth
*/