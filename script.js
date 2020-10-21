var array = ["anna", "cristiano" , "peppe", "non"] ;
var string ;
var rev_str = '' ;
for (var i = 0; i < array.length; i++) {

    string = array[i] ;
    //console.log(string);

    rev_str = reverse_string(string)
    //console.log(rev_str);
    if (string === rev_str) {
        console.log(string);
        console.log("la parola é palindroma");
        //alert("la parola é palindroma");
    } else {
        console.log(string);
        console.log("la parola non é palindroma");
        //alert("la parola non é palindroma");
    }
}



//funzioni

 function reverse_string(string) {


    return string.split('').reverse().join("")

 }
