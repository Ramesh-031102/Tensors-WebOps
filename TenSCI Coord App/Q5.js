/* You are given a set of five people with their names and age. */
const people = {
    '1' : {
        'name' : 'Rohan',
        'age' : 24
    },

    '2' : {
        'name' : 'Ujjwal',
        'age' : 27
    },
    '3' : {
        'name' : 'Tara',
        'age' : 18
    },
    '4' : {
        'name' : 'Sagar',
        'age' : 20
    },

    '5' : {
        'name' : 'Kumar',
        'age' : 21
    }
}

/* You need to make an array of names from people. Names should be arranged in ascending order of their age.*/
/* Write a function for the same. Hardcoding is not allowed. */

function arrange_names(obj){
    var arr = [];
    var names = [];
    for (const value of Object.values(obj)){
        arr.push([value["name"],value["age"]]);
    }
    arr.sort(function(a,b){return a[1]-b[1]});
    for (var i = 0; i < arr.length; i++){
        names.push(arr[i][0]);
    }
    return names;
}

/* You need to log the array of names using console.log().*/
console.log(arrange_names(people));