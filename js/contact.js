// console.log("contact us page");
// const contactForm = document.querySelector("#contactForm");
// console.log(contactForm);
// if (contactForm) {
//   contactForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let subject = document.querySelector("#subject").value;
//     let message = document.querySelector("#message").value;
//     let formObj = {
//       name,
//       email,
//       subject,
//       message,
//     };
//     try {
//       const response = await fetch(
//         `https://my-portfolio-website-61e43-default-rtdb.firebaseio.com/userForm.jso`,
//         {
//           method: "POST",
//           body: JSON.stringify(formObj),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       console.log(data);

//       if (!response.ok) {
//         throw new Error(data.message || "Could not create quote.");
//       }
//     } catch (error) {
//       alert("message not send");
//     }
//     console.log(formObj);
//     console.log("submitted");
//   });
// }

$(document).ready(function () {
  (function ($) {
    const contactForm = document.querySelector("#contactForm");
    $(contactForm).submit(async (e) => {
      e.preventDefault();
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let subject = document.querySelector("#subject").value;
      let message = document.querySelector("#message").value;
      let formObj = {
        name,
        email,
        subject,
        message,
      };
      try {
        const response = await fetch(
          `https://my-portfolio-website-61e43-default-rtdb.firebaseio.com/userForm.json`,
          {
            method: "POST",
            body: JSON.stringify(formObj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#subject").value = "";
        document.querySelector("#message").value = "";
        $("#success").fadeIn();
        $(".modal").modal("hide");
        $("#success").modal("show");
      } catch (error) {
        $("#error").fadeIn();
        $(".modal").modal("hide");
        $("#error").modal("show");
      }
    });
  })(jQuery);
});
