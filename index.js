// '1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin./'

// let a = 6
// let b = -8
// let c = 10

// let discriminant = b * b - 4 * a * c;

// if (discriminant > 0 ) {
//     var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     console.log(x1);
//     console.log(x2);
// }
// else{
//     console.log('0-dan  kicikdir');
// }




// '2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.'

    

// let a = 7;
// let main = [];

// for (let i = 1; i <= 1000; i++) {
//     if (i % a === 0) {
//         main.push(i);
//     }
// }
// console.log(main);


//  '3-7 saylı tapşırıqlar bu array üzərindən işləniləcək:
// const arr = [2, 4, 5, 9, 1];'

// 3. Bu massivin minimum elementini tapın:



// let arr = [2, 4, 5, 9, 1];
// let min = Math.min(...arr);

// console.log(min);


// 4. Bu massivin maksimum elementini tapın


// let arr = [2, 4, 5, 9, 1];
// let max = Math.max(...arr);

// console.log(max);

// 5. Bu massivin minimum elementinin indeksini tapın.

// let arr = [2, 4, 5, 9, 1];

// let min = Math.min(...arr);

// let minindex = arr.indexOf(min);

// console.log(minindex);


// 6. Bu massivin maksimum elementinin indeksini tapın.

// let arr = [2, 4, 5, 9, 1];

// let max = Math.max(...arr);

// let maxindex = arr.indexOf(max);

// console.log(maxindex);

// 7. Tək indeksli massiv elementlərinin cəmini hesablayın

// let arr = [2, 4, 5, 9, 1];

// let cem = 0;
// for (let i = 1; i < arr.length; i += 2) {
//     cem += arr[i]
    
// }
// console.log(cem);


// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// let tap = "Mən Code Academy Tələbəsiyəm";
// let littletext = tap.toLowerCase();
// console.log(littletext)



// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "


// let tap1 = "Mən Code Academy Tələbəsiyəm";
// let task = tap1.trim();
// console.log(task)



// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın


// let tap2 = "MənCodeAcademyTələbəsiyəm";
// let split = tap2.split(" ");
// console.log(split)



// 11.  "            Mən Code Academydə Programming tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.


// let tap3 = "            Mən Code Academydə Programming tədrisi alıram            "
// let lasttask = [];
// {
//     if (tap3.trim().split(' ').join('')) {
//         lasttask = tap3.trim().split(' ').join('').length
        
//     }
// }

// console.log(lasttask)

