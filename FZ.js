
  function toggleNav() {
    document.body.classList.toggle("nav-open");
}
document.querySelector(".nav-close").addEventListener("click", () => {
    toggleNav();
})

//TO CHANGE TO CHECKMARK WHEN CLICKED
function checkClick() {
    $(".lib-btn").click( function() {
        $(this).html('&#10004').text()
    })
}
checkClick()

//TO STORE THE BOOKS IN LOCAL STORAGE AND TO RETRIEVE THEM WHEN SELECTED


const data = [
    {
        name:"Our next chapter",
        description:"What lies after the death of her loved one, Maggie is expected to move on for the sake her kids and the situation her family is in. What could be Maggie's next chapter",
    },
    {
        name:"Olivia",
        description:"The Jansire kingdom has been placed on an everlasting curse as some would think. It takes the blood of an innocent girl to cleanse the land, one in which no one is willing to sacrifice",
    },
    {
        name:"Love yourself",
        description:"What better way to live life and enjoy each moment to the fullest by loving yourself, but what are the dangers that lie ahead and how many secrets are you willing to keep for that life",
    },
    {
        name:"Artificial intelligence",
        description:"Do you want to learn about robotics and machine stuff",
    },
    {
        name:"The secret of the red velvet",
        description:"Take a walk with Mercy in the park, and beg her so you can stay alive",
    },
    {
        name:"Abandoned",
        description:"After Janelle's last pregnancy, she decided she was done pretending to be in love with him",
    },
]

stringing = JSON.stringify(data)

Array.from(document.getElementsByClassName("lib-btn")).forEach(function (element) {
    element.addEventListener("click", (e) =>{
        //window.localStorage.setItem("lib", stringing)
        let emptyLib = JSON.parse(localStorage.getItem("lib")) || []
        let newS = {
            name:e.target.name,
            description:e.target.description,
        }
        emptyLib.push(newS)
        localStorage.setItem("lib", stringing)
    });
  });

let book = JSON.parse(window.localStorage.getItem("lib")) || []

let books = JSON.stringify(book, undefined, 4)
$(".book-disp").html(books)
