/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
This project will use JavaScript, pagination, and filtering to display several “pages” of student data that the user can easily navigate and view.
*/




/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = ''; 

   for (let i = 0; i < list.length; i ++) {
      let student = list[i];
      
      if (i >= startIndex && i < endIndex) {
         const newHtml = `
            <li class = "student-item cf">
               <div class = "student-details">
                  <img class = "avatar" src = "${student.picture.large}" alt = "Profile Picture">
                  <h3>${student.name.first} ${student.name.last}</h3>
                  <span class = "email">${student.email}</span>
               </div>
               <div class = "joined-details">
                  <span class ="date"> ${student.registered.date}</span>
               </div>
            </li>
         `;

         studentList.insertAdjacentHTML('beforeend', newHtml);

      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   /*
      The for loop will create individual buttons on page
   */
  
   for (let i = 1; i <= numOfPages; i++) {
      const pageNumber = [i];
      const buttonHTML =
         `<li>
            <button type="button">${pageNumber}</button>
         </li>`;
      linkList.insertAdjacentHTML('beforeend', buttonHTML);

      const pageButton = document.querySelector('button');
      pageButton.className = 'active';
      }

      /*
         The event listener will listen for click events on
         the pagination buttons on the page
      */
   
      linkList.addEventListener('click', (e) => {
         if(e.target.tagName == 'BUTTON') {
            const activeButton = document.querySelector('.active');
            activeButton.className = '';

            e.target.className = 'active';
            const clickEventContent = e.target.textContent;

            showPage(list, clickEventContent);
         }
      });
   }

/**
   Calling Functions
*/

showPage(data, 1);
addPagination(data);