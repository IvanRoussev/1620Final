

let dark_theme = document.querySelector(".toggle");


dark_theme.addEventListener("click", (e) => {
    let classlist = document.querySelector(":root")
    
        for (let i = 0; i < nodelist.length; i++) {
            e.classlist = nodelist[i].classlist
            if (!classlist.contain('--light-theme')) {
                classlist.add('--light-theme')
                classlist.remove('--dark-theme') }
            else {
                classlist.remove('--light-theme')
                classlist.add('--dark-theme')
            }
            }
      }
);




function createformonInput() {
    let my_form = document("div");
    my_form.className = "contact";
    let form_text = document.createTextNode(`<label for="msg">Message</label>`);
    my_form.appendChild(form_text);
    my_form.addEventListener("click", (e) => {
    e.preventDefault();
    inputform = e.target.textContent;
    renderView(contactList[i]); 
        }
    );
    return index_div;
  }

  console.log(createformonInput)






