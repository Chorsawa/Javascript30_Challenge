const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
    'Anywhere But Here', 'An Old Dog'];


function removeArticles(name){
    return name.replace(/^(a |the |an )/i, '').trim();
}
const sortedArr = bands.sort(function(a, b){
    if(removeArticles(a) > removeArticles(b)){
        return 1;
    }
    else{
        return -1;
    }
});

document.querySelector('#bands').innerHTML = sortedArr
        .map(band => `<li>${band}</li>`)
        .join('');

console.log(sortedArr);