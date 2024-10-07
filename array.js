let arr = [7,2,8,1,3,4];
let i;
let j;
let temp;

document.write("Before Sort" + "<br/>");
for (i = 0; i <6; i++){
    document.write(arr[i] + "<br/>" );
}

for (i = 0; i <6; i++){
    for(j = 0; j < 5; j++){
            if(arr[j] < arr [j + 1]){
                temp = arr[j];
                arr[j] = arr [j + 1];
                arr[j + 1] = temp;
            }
    }
}
    document.write(`After sort` + "<br/>");
    for(i = 0; i < 6; i++){
        document.write(arr[i] + "<br/>")
    }