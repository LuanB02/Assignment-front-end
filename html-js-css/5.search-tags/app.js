let content = document.querySelector('.content');

let input = document.querySelector('.content input');

let removeAll = document.querySelector('.removeElement');

let tags = ['Nodejs', 'Reactjs'];


createTag()
function createTag() {
    content.innerHTML = ''
    for (let i = 0; i <tags.length; i++) {
        const tag = tags[i]; 
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-xmark" onclick="removeTag()"></i>
                             </li>`

    }
    content.appendChild(input);
    input.focus();
}
function removeTag(index) {
    tags.splice(index,1);
    createTag();
}
function addTag(e) {}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        tags.push(input.value);
        input.value = '';
        createTag()
    }   
}) 
removeAll.addEventListener('click', function() {
    tags = [];
    
    createTag();
})