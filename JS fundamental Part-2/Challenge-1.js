const calcAverage = (s1,s2,s3)=> (s1+s2+s3)/3;
function checkWinner(dolphins_scr,koalas_scr){
    if(dolphins_scr>koalas_scr*2 )
        console.log(`dolphins Wins (${dolphins_scr} vs. ${koalas_scr})`);
    else if(koalas_scr>dolphins_scr*2)
        console.log(`koalas Wins (${koalas_scr} vs. ${dolphins_scr})`);
    else
        console.log("No Team Wins!");
}
// TestCase-1
dolphins_s1 = 44
dolphins_s2 = 23
dolphins_s3 = 71
koalas_s1 = 65
koalas_s2 = 54
koalas_s3 = 49

avgDolphins=calcAverage(dolphins_s1,dolphins_s2,dolphins_s3);
avgkoalas = calcAverage(koalas_s1,koalas_s2,koalas_s3);
checkWinner(avgDolphins,avgkoalas)

// TestCase-2
dolphins_s1 = 85
dolphins_s2 = 54
dolphins_s3 = 41
koalas_s1 = 23
koalas_s2 = 34
koalas_s3 = 27

avgDolphins=calcAverage(dolphins_s1,dolphins_s2,dolphins_s3);
avgkoalas = calcAverage(koalas_s1,koalas_s2,koalas_s3);
checkWinner(avgDolphins,avgkoalas)

