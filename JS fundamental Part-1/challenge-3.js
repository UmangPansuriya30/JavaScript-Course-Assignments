// TestCase-1
// dolphins_s1 = 96
// dolphins_s2 = 108
// dolphins_s3 = 89
// koalas_s1 = 88
// koalas_s2 = 91
// koalas_s3 = 110
// TestCase-2
// dolphins_s1 = 97
// dolphins_s2 = 112
// dolphins_s3 = 101
// koalas_s1 = 109
// koalas_s2 = 95
// koalas_s3 = 123
// // TestCase-3
dolphins_s1 = 97
dolphins_s2 = 112
dolphins_s3 = 101
koalas_s1 = 109
koalas_s2 = 95
koalas_s3 = 106

dolphins_avg_scr = (dolphins_s1 + dolphins_s2 +dolphins_s3)/3
koalas_avg_scr = (koalas_s1 + koalas_s2 +koalas_s3)/3

console.log(dolphins_avg_scr, koalas_avg_scr)
if (dolphins_avg_scr == koalas_avg_scr && dolphins_avg_scr > 100)
    console.log("match Draw!!")
else if (dolphins_avg_scr > 100 && dolphins_avg_scr>koalas_avg_scr)
    console.log("dolphins wins the trophy")
else if(koalas_avg_scr > 100)
    console.log("koalas wins the trophy")
else
    console.log("no team wins the trophy")

