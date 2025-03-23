// /// DATE SORTING
// const items = [
//     { name: 'Laptop', price: 1200 },
//     { name: 'Keyboard', price: 100 },
//     { name: 'Mouse', price: 50 },
//   ];
  
//   items.sort((a, b) => {
//     if (a.price < b.price) {
//       return -1; // a comes before b
//  //   }
//  //   if (a.price > b.price) {
//   //    return 1; // a comes after b
//   //  }
//   //  return 0; // a and b are equal
//   //});
  
//   //console.log(items);
//   // Expected output:
//   // [
//   //   { name: "Mouse", price: 50 },
//   //   { name: "Keyboard", price: 100 },
//   //   { name: "Laptop", price: 1200 }
//   // ]


//dropdown (try to do one)
///filter button to activate
//actually filtering

// let filteredArts = pieces.filter((piece) => piece.medium.includes('Digital'));

// filteredArts.forEach ((piece) => {
//     console.log('yep!')
//     let galleryImg = document.createElement('img');
//     galleryImg.src = piece.src;
//     let gallerySpace = document.querySelector('.galleryPage');
//     gallerySpace.appendChild(galleryImg);
// });

//pieces.forEach ((piece) => {piece.style.display = none;})


//display popup
let modal = document.querySelector(".modal");
let jellyPoster = document.querySelector("#jellyPoster");

    //object information shows up in these places
    let mainImg = document.getElementById("mainImg");
    let span_titleOfPiece = document.getElementById("titleOfPiece");

    // change index of piece displayed
    let currentPieceIndex = 0;


function showArt(index) {
    modal.style.display = "block";
    modal.style.pointerEvents = "auto";
    mainImg.src = pieces[index].image;
    span_titleOfPiece.textContent = pieces[index].name;
}

function nextPiece() {
    currentPieceIndex = (currentPieceIndex + 1 ) % pieces.length;
    showArt(currentPieceIndex);
}

function prevPiece() {
    currentPieceIndex = (currentPieceIndex - 1 + pieces.length) % pieces.length;
    showArt(currentPieceIndex);
}

// Function to get the index of the piece with the matching ID
function getPieceIndexById(id) {
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].id === id) {
            return i;
        }
    }
    return -1; // Return -1 if no matching ID is found
}

// Find and match indexes
document.querySelectorAll('.clickArt').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        const id = this.id;
        const index = getPieceIndexById(id);
        if (index !== -1) {
            showArt(index);
        } else {
            console.error('Piece not found for ID:', id);
        }
    });
});

// Event listeners for next and previous buttons
document.getElementById("nextButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action
    nextPiece();
});
document.getElementById("prevButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action
    prevPiece();
});

// Event listener for the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closePopup();
    }
});

//close button within popup
let closeButton = document.querySelector(".close");
function closePopup() {
    modal.style.display = "none";
    console.log("Closing popup");
}

if (closeButton) {
    closeButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action
        closePopup();
    });
} else {
    console.error('Close button not found');
}