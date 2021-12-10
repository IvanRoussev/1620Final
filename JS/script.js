function swap(evt) {
    nodelist = document.getElementsByTagName("*")

    for (let i = 0; i < nodelist.length; i++) {
        classlist = nodelist[i].classlist
        if (!classlist.contain('--light-mode')) {
            classlist.add('--light-mode')
            classlist.remove('--dark-mode') }
        else {
            classlist.remove('--light-mode')
            classlist.add('--dark-mode')
        }
        }
  }


const toggle_button = document.querySelector(".toggle")
    evt.swap()
  
toggle_button.addEventListener("click", swap)








