

var fyfName = document.getElementById('fyfName');
var cyMonth = document.getElementById('cyMonth');
var cyDay = document.getElementById('cyDay');
var cfyYear = document.getElementById('cfyYear');

var fpfName = document.getElementById('fpfName');
var cpMonth = document.getElementById('cpMonth');
var cpDay = document.getElementById('cpDay');
var cfpYear = document.getElementById('cfpYear');

var cytName = document.getElementById('cytName');
var cptName = document.getElementById('cptName');

var cytLPNum = document.getElementById('cytLPNum');
var cptLPNum = document.getElementById('cptLPNum');

var cytBDNum = document.getElementById('cytBDNum');
var cptBDNum = document.getElementById('cptBDNum');

var cytEPNum = document.getElementById('cytEPNum');
var cptEPNum = document.getElementById('cptEPNum');

var cytHDNum = document.getElementById('cytHDNum');
var cptHDNum = document.getElementById('cptHDNum');

var cytPNum = document.getElementById('cytPNum');
var cptPNum = document.getElementById('cptPNum');

var ytMNum = document.getElementById('cytMNum');
var ptMNum = document.getElementById('cptMNum');

var lpComp = document.getElementById('lpComp');
var bdComp = document.getElementById('bdComp');
var expComp = document.getElementById('expComp');
var hdComp = document.getElementById('hdComp');
var pComp = document.getElementById('pComp');
var mComp = document.getElementById('mComp');

var cpercent = document.getElementById('cpercent');


document.getElementById('matchCoup').addEventListener('click', ()=> {

    if (fyfName.value === '' || cfyYear.value === '' || fpfName.value === '' || cfpYear.value === '') {
        document.getElementById('hider').style.display = 'none';
        document.getElementById('show').style.display = 'none';
    } else {
        document.getElementById('hider').style.display = 'block';
        document.getElementById('show').style.display = 'block';
    }
    

    // Y date of birth 
    var yourMonth = Number(cyMonth.value);
    var yourMonthHold = yourMonth;
    var yourDayHold = cyDay.value;
    var yourYearHold = cfyYear.value;
    switch (yourMonth) {
        case 1:
            yourMonth = 'January'
            break;
        case 2:
            yourMonth = 'February'
            break;

        case 3:
            yourMonth = 'March'
            break;

        case 4:
            yourMonth = 'April'
            break;
        
        case 5:
            yourMonth = 'May'
            break;
        
        case 6:
            yourMonth = 'June'
            break;
        
        case 7:
            yourMonth = 'July'
            break;

        case 8:
            yourMonth = 'August'
            break;
        
        case 9:
            yourMonth = 'September'
            break;

        case 10:
            yourMonth = 'October'
            break;

        case 11:
            yourMonth = 'November'
            break;
        
        case 1:
            yourMonth = 'December'
            break;

    
        default:
            break;
    };


    cytName.innerHTML = fyfName.value + '<br>'+ yourMonth + '-' + yourDayHold + '-' + yourYearHold;

    var dayString = String(cyDay.value);
    var monthString = String(cyMonth.value);
    var yearString = String(cfyYear.value);


    var daySplit = dayString.split('');
    var monthSplit = monthString.split('');
    var yearSplit = yearString.split('');
    
    var dayNumArray = daySplit.map(str => parseInt(str));
    var monthNumArray = monthSplit.map(str => parseInt(str));
    var yearNumArray = yearSplit.map(str => parseInt(str));
       
    var sumDayArray = dayNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumMonthArray = monthNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumYearArray = yearNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    // Your life path number 
    var sum = 0;
    mSplit = String(yearString).split('');
    var xsum = eval(mSplit.join('+'));
    sumYearArray = xsum;

    if (Number(dayString) < 10) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) === 10) {
        sumDayArray = 1;
    } else if (Number(dayString) === 20) {
        sumDayArray = 2;
    } else if (Number(dayString) === 30) {
        sumDayArray = 3;
    } else if (Number(dayString) === 11 || Number(dayString) === 22) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) > 10) {
        mSplit = String(dayString).split('');
        xsum = eval(mSplit.join('+'));
        sumDayArray = xsum
    };
    
    if (Number(monthString) < 10) {
        sumMonthArray = Number(monthString);
    } else if (Number(dayString) === 10) {
        sumMonthArray = 1;
    } else if (Number(monthString) === 11 ) {
        sumMonthArray = 11;
    } else if (Number(monthString) === 12){
        sumMonthArray = 3;
    }

    if (Number(sumYearArray) < 10) {
        sumYearArray = Number(sumYearArray);
    } else if (Number(sumYearArray) === 10) {
        sumYearArray = 1;
    } else if (Number(sumYearArray) === 11 ) {
        sumYearArray = 11;
    } else if (Number(sumYearArray) === 22){
        sumYearArray = 22;
    } else if (Number(sumYearArray) === 33){
        sumYearArray = 33;
    } else if (Number(sumYearArray) > 10) {
        mSplit = String(sumYearArray).split('');
        xsum = eval(mSplit.join('+'));
        if (xsum < 10) {
            xsum
        } else if (xsum === 10) {
            xsum = 1
        } else if (xsum === 11 || xsum === 22 || xsum === 33) {
            xsum
        } else if (xsum > 10) {
            mSplit = String(xsum).split('');
            xsum = eval(mSplit.join('+'));
        }
        sumYearArray = xsum;
    }

    // console.log(sumDayArray, sumMonthArray, sumYearArray)
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var ddayHold = sumDayArray;
    var mmonthHold = sumMonthArray;
    var yyearHold = sumYearArray;
    var keepDay = sumDayArray;

    var lsum = sum;
    var lpHold, edHold, suHold, pnHold, nSum, dbTotalSum;
    if (sum < 10) {
        cytLPNum.innerHTML = '<b>' +sum+ '</b>';
    } else if (sum === 10) {
        cytLPNum.innerHTML = '<b> 1 </b>'
    }
    while (sum > 10) {
        if (sum === 11) {
            cytLPNum.innerHTML = '11/2';
            sum = 2;
            break
        } else if(sum === 22) {
            cytLPNum.innerHTML = '4';
            sum = 4;
            break;
        } else if (sum === 33) {
            cytLPNum.innerHTML = '6';
            sum = 6;
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            lpHold = sum;
            if (Number(numberString) === 19){
                cytLPNum.innerHTML =  '1';
            } else if (sum === 10) {
                cytLPNum.innerHTML = '1';
            } else {
                cytLPNum.innerHTML = sum ;
            }
        }
    };

    // Birthday Number 
    var xSum;
    mSplit = String(dayString).split('');
    xSum = Number(dayString);

    if (xSum < 10) {
        sumDayArray = xSum;
    } else if (xSum === 10) {
        sumDayArray = 1;
    } else if (xSum === 13) {
        sumDayArray = '4';
    } else if (xSum === 14) {
        sumDayArray = '5';
    }else if (xSum === 16) {
        sumDayArray = '7';
    } else if (xSum === 19) {
        sumDayArray = '1';
    } else if (xSum === 11) {
        sumDayArray = '11/2';
        xSum = '11/2'
    } else if (xSum > 10) {
        mSplit = String(xSum).split('');
        xSum = eval(mSplit.join('+'));

        if (xSum < 10) {
            xSum
        } else if (xSum === 10) {
            xSum = 1
        } else if (xSum === 13) {
            xSum = '4';
        } else if (xSum === 14) {
            xSum = '5';
        }else if (xSum === 16) {
            xSum = '7';
        } else if (xSum === 19) {
            xSum = '1';
        } else if (xSum === 11) {
            xSum = '11/2';
        } else if (xSum > 10) {
            mSplit = String(xSum).split('');
            xSum = eval(mSplit.join('+'));
        };
        sumDayArray = xSum;
    };
    sumDayArray = Number(sumDayArray);
    console.log(sumDayArray)
    if (sumDayArray === 1) {
        cytBDNum.innerHTML = '<b>1</b>';
    } else if (sumDayArray === 2) {
        cytBDNum.innerHTML = '<b>2</b>';
    } else if (sumDayArray === 3) {
        cytBDNum.innerHTML = '<b>3</b>';
    } else if (sumDayArray === 4) {
        cytBDNum.innerHTML = '<b>4</b>';
    } else if (sumDayArray === 5) {
        cytBDNum.innerHTML = '<b>5</b>';
    } else if (sumDayArray === 6) {
        cytBDNum.innerHTML = '<b>6</b>';
    } else if (sumDayArray === 7) {
        cytBDNum.innerHTML = '<b>7</b>';
    } else if (sumDayArray === 8) {
        cytBDNum.innerHTML = '<b>8</b>';
    } else if (sumDayArray === 9) {
        cytBDNum.innerHTML = '<b>9</b>';
    } else if (xSum === '11/2')  {
        cytBDNum.innerHTML =  '<b>11/2</b>';
    } 

    // expression / destiny number 
    var ednfName = fyfName.value.split(' ');
    var count = 0;
    var countList = [];
    var countHold = 0;
    ednfName = Array.from(ednfName);
    for (let iterate  = 0; iterate < ednfName.length; iterate++) {
        for ( let i = 0; i <= ednfName[iterate].length; i++) {
            if (String(ednfName[iterate][i]).toLowerCase() === 'a' ||  String(ednfName[iterate][i]).toLowerCase() === 'j' || String(ednfName[iterate][i]).toLowerCase() === 's' ) {
                count += 1;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'b' || String(ednfName[iterate][i]).toLowerCase() === 'k' || String(ednfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'c' || String(ednfName[iterate][i]).toLowerCase() === 'l' || String(ednfName[iterate][i]).toLowerCase() === 'u') {
                count += 3;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'd' || String(ednfName[iterate][i]).toLowerCase() === 'm' || String(ednfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'e' || String(ednfName[iterate][i]).toLowerCase() === 'n' || String(ednfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'f' || String(ednfName[iterate][i]).toLowerCase() === 'o' || String(ednfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'g' || String(ednfName[iterate][i]).toLowerCase() === 'p' || String(ednfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'h' || String(ednfName[iterate][i]).toLowerCase() === 'q' || String(ednfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'i' || String(ednfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            }
        };

        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };

    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
    } else if (countHold === 11) {
        dbTotalSum = '11/2';
        nSum = 2
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
        } else if (nSum === 11) {
            dbTotalSum = '11/2';
            nSum = 2;
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                dbTotalSum;
                nSum;
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
            } else if (nSum === 11) {
                dbTotalSum = '11/2';
                nSum = 2;
            } else if (nSum === 22) {
                dbTotalSum = 22;
                nSum = 4;
            } else if (nSum === 33) {
                dbTotalSum = 33;
                nSum = 6;
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
            }
        }
    }
    if (dbTotalSum === 10) {
        cytEPNum.innerHTML = '<b>1</b>' ;
    } else if (dbTotalSum === '11/2') {
        cytEPNum.innerHTML = '<b>11/2</b>';
    } else if (dbTotalSum === 28) {
        cytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 37) {
        cytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 46) {
        cytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 55) {
        cytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 64) {
        cytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 73) {
        cytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 82) {
        cytEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 91) {
        cytEPNum.innerHTML = '<b>1</b>';
    }
    else {
        cytEPNum.innerHTML = '<b>' + nSum + '</b>';
    };


    // Your Soul Urge / Heart Desire Number 
    var suhdfName = fyfName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    countHold = 0;
    for (let iterate  = 0; iterate < suhdfName.length; iterate++) {
        for ( let i = 0; i <= suhdfName[iterate].length; i++) {
            if ( String(suhdfName[iterate][i]).toLowerCase() === 'a' ) {
                count += 1;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'u' ) {
                count += 3;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'e' ) {
                count += 5;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'o' ) {
                count += 6;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'i' ) {
                count += 9;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'y' ) {
                count += 7;
            }
            else {
                count+=0;
            }
        };
        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };
    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
        cytHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
        cytHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 11) {
        dbTotalSum = 11;
        nSum = 2
        cytHDNum.innerHTML = '<b>11/2</b>';
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
        cytHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
        cytHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
            cytHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
            cytHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 11) {
            dbTotalSum = 11;
            nSum = 2;
            cytHDNum.innerHTML = '<b>11/2</b>';
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
            cytHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
            cytHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            cytHDNum.innerHTML = '<b>' + nSum + '</b>';

            if (nSum < 10) {
                dbTotalSum;
                nSum;
                cytHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
                cytHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 11) {
                dbTotalSum = 11;
                nSum = 2;
                cytHDNum.innerHTML = '<b>11/2</b>';
            } else if (nSum === 22) {
                dbTotalSum = 22;
                nSum = 4;
                cytHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 33) {
                dbTotalSum = 33;
                nSum = 6;
                cytHDNum.innerHTML = '<b>' + nSum + ' </b>';
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
                cytHDNum.innerHTML = '<b>' + nSum + ' </b>';
            }
        }
    };

    // Your personality number 
    pnfName = fyfName.value.split(' ');
    count = 0;
    countList = [], countHold = 0;
    pnfName = Array.from(pnfName);
    
    for (let iterate  = 0; iterate < pnfName.length; iterate++) {
        var L = pnfName[iterate].length
        if (pnfName[iterate][L - 1] === 'y' || pnfName[iterate][L - 1] === 'Y') {
            pnfName[iterate]=(pnfName[iterate]).slice(0, -1);
        }
        for ( let i = 0; i <= pnfName[iterate].length; i++) {
            if (String(pnfName[iterate][i]).toLowerCase() === 'j' ||  String(pnfName[iterate][i]).toLowerCase() === 's'  ) {
                count += 1;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'b' || String(pnfName[iterate][i]).toLowerCase() === 'k' || String(pnfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'c' || String(pnfName[iterate][i]).toLowerCase() === 'l' ) {
                count += 3;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'd' || String(pnfName[iterate][i]).toLowerCase() === 'm' || String(pnfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'n' || String(pnfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'f' || String(pnfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y'  ) {
                count += 7;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'h' || String(pnfName[iterate][i]).toLowerCase() === 'q' || String(pnfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if ( String(pnfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            } else {
                count += 0;
            }
            
        };
        // console.log(count);


        if (count < 10) {
            count;
        } else if (count === 10) {
            count = 1; 
        } else if (count === 11 || count === 22 || count === 33) {
            count;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            count = eval(pnSplit.join('+'));

        }
        countHold += count;
        count = 0;
    };
    // console.log(countHold)

    if (countHold < 10) {
        countHold;
    } else if (countHold === 10) {
        countHold = 1;
    } else if (countHold === 11 || countHold === 22 || countHold === 33 || countHold === 13 || countHold === 14 || countHold === 16 || countHold === 19) {
        countHold;
    } else if (countHold > 10) {
        countHold;
        
        
    }

    // console.log(countHold)
    count = countHold;
    if (count < 10) {
        count;
        cytPNum.innerHTML = '<b>' + count + '</b>' ;
    } else if (count == 10) {
        count = 1;
        cytPNum.innerHTML = '<b>1</b>' ;
    } else if ( count === 11) {
        count = 13;
        sum = 4;
        cytPNum.innerHTML = '<b>11/2</b>' ;
    } else if ( count === 22 || count === 33) {
        count;
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 13) {
        count = 13;
        sum = 4;
        cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 14) {
        count = 14;
        sum = 5;
        cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 16) {
        count = 16;
        sum = 7;
        cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 19) {
        count = 19;
        sum = 1;
        cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        count = sum

        if (count < 10) {
            count;
            cytPNum.innerHTML = '<b>' + count + '</b>' ;
        } else if (count == 10) {
            count = 1;
            cytPNum.innerHTML = '<b>1</b>' ;
        } else if ( count === 11) {
            count = 13;
            sum = 4;
            cytPNum.innerHTML = '<b>11/2</b>' ;
        } else if (count === 22 || count === 33) {
            count;
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 13) {
            count = 13;
            sum = 4;
            cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 14) {
            count = 14;
            sum = 5;
            cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 16) {
            count = 16;
            sum = 7;
            cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 19) {
            count = 19;
            sum = 1;
            cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            cytPNum.innerHTML = '<b>' +sum+ '</b>' ;
            count = sum
        }
    };

    // Your Maturity Number 
    var lifePath = ((cytLPNum.textContent).trim()).split('/');
    lpHold = Number(lifePath[lifePath.length - 1]);
    mSplit = String(lpHold).split('');
    lpHold = eval(mSplit.join('+'));
    
    var expPath = ((cytEPNum.textContent).trim()).split('/');
    edHold = Number(expPath[expPath.length - 1])
    mSplit = String(edHold).split('');
    edHold = eval(mSplit.join('+'));
    
    count = lpHold + edHold;

    // console.log(lpHold, edHold, count)
    mSplit = String(count).split('');
    sum = eval(mSplit.join('+'));
    sum = count;

    // console.log(sum)

    if (sum < 10) {
        ytMNum.innerHTML = sum;
    } else if (sum === 10) {
        ytMNum.innerHTML = 1;
    } else if (sum === 11) {
        ytMNum.innerHTML = '11/2';
    } else if (sum === 22) {
        ytMNum.innerHTML = '4';
    } else if (sum === 33) {
        ytMNum.innerHTML = '6';
    } else if (sum > 10) {
        mSplit = String(sum).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum  = 1;
        } else if (sum === 11) {
            sum = '11/2'
        } else if (sum === 22) {
            sum = '4'
        } else if (sum === 33) {
            sum = '6'
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));

            if (sum < 10) {
                sum;
            } else if (sum === 10) {
                sum  = 1;
            } else if (sum === 11) {
                sum = '11/2'
            } else if (sum === 22) {
                sum = '4'
            } else if (sum === 33) {
                sum = '6'
            } else if (sum > 10) {
                mSplit = String(sum).split('');
                sum = eval(mSplit.join('+'));
            }
        }
        ytMNum.innerHTML = sum;
    }










    

    // Partner date of birth 
    var partnerMonth = Number(cpMonth.value);
    var partnerMonthHold = partnerMonth;
    var partnerDayHold = cpDay.value;
    var partnerYearHold = cfpYear.value;
    switch (partnerMonth) {
        case 1:
            partnerMonth = 'January'
            break;
        case 2:
            partnerMonth = 'February'
            break;

        case 3:
            partnerMonth = 'March'
            break;

        case 4:
            partnerMonth = 'April'
            break;
        
        case 5:
            partnerMonth = 'May'
            break;
        
        case 6:
            partnerMonth = 'June'
            break;
        
        case 7:
            partnerMonth = 'July'
            break;

        case 8:
            partnerMonth = 'August'
            break;
        
        case 9:
            partnerMonth = 'September'
            break;

        case 10:
            partnerMonth = 'October'
            break;

        case 11:
            partnerMonth = 'November'
            break;
        
        case 1:
            partnerMonth = 'December'
            break;

    
        default:
            break;
    };


    cptName.innerHTML = fpfName.value + '<br>'+ partnerMonth + '-' + partnerDayHold + '-' + partnerYearHold;
    
    var dayString = String(cpDay.value);
    var monthString = String(cpMonth.value);
    var yearString = String(cfpYear.value);


    var daySplit = dayString.split('');
    var monthSplit = monthString.split('');
    var yearSplit = yearString.split('');
    
    var dayNumArray = daySplit.map(str => parseInt(str));
    var monthNumArray = monthSplit.map(str => parseInt(str));
    var yearNumArray = yearSplit.map(str => parseInt(str));
       
    var sumDayArray = dayNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumMonthArray = monthNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    var sumYearArray = yearNumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    // Partner life path number 
    var sum = 0;
    mSplit = String(yearString).split('');
    var xsum = eval(mSplit.join('+'));
    sumYearArray = xsum;

    if (Number(dayString) < 10) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) === 10) {
        sumDayArray = 1;
    } else if (Number(dayString) === 20) {
        sumDayArray = 2;
    } else if (Number(dayString) === 30) {
        sumDayArray = 3;
    } else if (Number(dayString) === 11 || Number(dayString) === 22) {
        sumDayArray = Number(dayString);
    } else if (Number(dayString) > 10) {
        mSplit = String(dayString).split('');
        xsum = eval(mSplit.join('+'));
        sumDayArray = xsum
    };
    
    if (Number(monthString) < 10) {
        sumMonthArray = Number(monthString);
    } else if (Number(dayString) === 10) {
        sumMonthArray = 1;
    } else if (Number(monthString) === 11 ) {
        sumMonthArray = 11;
    } else if (Number(monthString) === 12){
        sumMonthArray = 3;
    }

    if (Number(sumYearArray) < 10) {
        sumYearArray = Number(sumYearArray);
    } else if (Number(sumYearArray) === 10) {
        sumYearArray = 1;
    } else if (Number(sumYearArray) === 11 ) {
        sumYearArray = 11;
    } else if (Number(sumYearArray) === 22){
        sumYearArray = 22;
    } else if (Number(sumYearArray) === 33){
        sumYearArray = 33;
    } else if (Number(sumYearArray) > 10) {
        mSplit = String(sumYearArray).split('');
        xsum = eval(mSplit.join('+'));
        if (xsum < 10) {
            xsum
        } else if (xsum === 10) {
            xsum = 1
        } else if (xsum === 11 || xsum === 22 || xsum === 33) {
            xsum
        } else if (xsum > 10) {
            mSplit = String(xsum).split('');
            xsum = eval(mSplit.join('+'));
        }
        sumYearArray = xsum;
    }

    // console.log(sumDayArray, sumMonthArray, sumYearArray)
    
    sum = sumDayArray + sumMonthArray + sumYearArray;
    var ddayHold = sumDayArray;
    var mmonthHold = sumMonthArray;
    var yyearHold = sumYearArray;
    var keepDay = sumDayArray;

    var lsum = sum;
    var lpHold, edHold, suHold, pnHold, nSum, dbTotalSum;
    if (sum < 10) {
        cptLPNum.innerHTML = '<b>' +sum+ '</b>';
    } else if (sum === 10) {
     cptLPNum.innerHTML = '<b> 1 </b>'
    }
    while (sum > 10) {
        if (sum === 11) {
         cptLPNum.innerHTML = '11/2';
            sum = 2;
            break
        } else if(sum === 22) {
         cptLPNum.innerHTML = '4';
            sum = 4;
            break;
        } else if (sum === 33) {
         cptLPNum.innerHTML = '6';
            sum = 6;
            break;
        } else {
            var numberString = sum.toString(); 
            var digitArray = numberString.split('').map(Number);
            numbers = digitArray.map(str => parseInt(str));     
            sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            lpHold = sum;
            if (Number(numberString) === 19){
             cptLPNum.innerHTML =  '1';
            } else if (sum === 10) {
             cptLPNum.innerHTML = '1';
            } else {
             cptLPNum.innerHTML = sum ;
            }
        }
    };

    // Birthday Number 
    var xSum;
    mSplit = String(dayString).split('');
    xSum = Number(dayString);

    if (xSum < 10) {
        sumDayArray = xSum;
    } else if (xSum === 10) {
        sumDayArray = 1;
    } else if (xSum === 13) {
        sumDayArray = '4';
    } else if (xSum === 14) {
        sumDayArray = '5';
    }else if (xSum === 16) {
        sumDayArray = '7';
    } else if (xSum === 11) {
        sumDayArray = '11/2';
    } else if (xSum === 19) {
        sumDayArray = '1';
    } else if (xSum > 10) {
        mSplit = String(xSum).split('');
        xSum = eval(mSplit.join('+'));

        if (xSum < 10) {
            xSum
        } else if (xSum === 10) {
            xSum = 1
        } else if (xSum === 11) {
            xSum = '11/2'
        } else if (xSum === 13) {
            xSum = '4';
        } else if (xSum === 14) {
            xSum = '5';
        }else if (xSum === 16) {
            xSum = '7';
        } else if (xSum === 19) {
            xSum = '1';
        } else if (xSum > 10) {
            mSplit = String(xSum).split('');
            xSum = eval(mSplit.join('+'));
        };
        sumDayArray = xSum;
    }

    // console.log(sumDayArray)
    if (sumDayArray === 1) {
        cptBDNum.innerHTML = '<b>1</b>';
    } else if (sumDayArray === 2) {
        cptBDNum.innerHTML = '<b>2</b>';
    } else if (sumDayArray === 3) {
        cptBDNum.innerHTML = '<b>3</b>';
    } else if (sumDayArray === 4) {
        cptBDNum.innerHTML = '<b>4</b>';
    } else if (sumDayArray === 5) {
        cptBDNum.innerHTML = '<b>5</b>';
    } else if (sumDayArray === 6) {
        cptBDNum.innerHTML = '<b>6</b>';
    } else if (sumDayArray === 7) {
        cptBDNum.innerHTML = '<b>7</b>';
    } else if (sumDayArray === 8) {
        cptBDNum.innerHTML = '<b>8</b>';
    } else if (sumDayArray === 9) {
        cptBDNum.innerHTML = '<b>9</b>';
    } else if (sumDayArray === '11/2') {
        cptBDNum.innerHTML =  '<b>11/2</b>';
    } else if (sumDayArray === '14/5') {
        cptBDNum.innerHTML = '<b>5</b>';
    } else if (sumDayArray === '16/7') {
        cptBDNum.innerHTML = '<b>7</b>';
    } else if (sumDayArray === '19/1') {
        cptBDNum.innerHTML = '<b>1</b>';
    };


    // Partner expression / destiny number 
    var ednfName = fpfName.value.split(' ');
    var count = 0;
    var countList = [];
    var countHold = 0;
    ednfName = Array.from(ednfName);
    for (let iterate  = 0; iterate < ednfName.length; iterate++) {
        for ( let i = 0; i <= ednfName[iterate].length; i++) {
            if (String(ednfName[iterate][i]).toLowerCase() === 'a' ||  String(ednfName[iterate][i]).toLowerCase() === 'j' || String(ednfName[iterate][i]).toLowerCase() === 's' ) {
                count += 1;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'b' || String(ednfName[iterate][i]).toLowerCase() === 'k' || String(ednfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'c' || String(ednfName[iterate][i]).toLowerCase() === 'l' || String(ednfName[iterate][i]).toLowerCase() === 'u') {
                count += 3;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'd' || String(ednfName[iterate][i]).toLowerCase() === 'm' || String(ednfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'e' || String(ednfName[iterate][i]).toLowerCase() === 'n' || String(ednfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'f' || String(ednfName[iterate][i]).toLowerCase() === 'o' || String(ednfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'g' || String(ednfName[iterate][i]).toLowerCase() === 'p' || String(ednfName[iterate][i]).toLowerCase() === 'y') {
                count += 7;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'h' || String(ednfName[iterate][i]).toLowerCase() === 'q' || String(ednfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if (String(ednfName[iterate][i]).toLowerCase() === 'i' || String(ednfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            }
        };

        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };

    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
    } else if (countHold === 11) {
        dbTotalSum = '11/2';
        nSum = 2
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
        } else if (nSum === 11) {
            dbTotalSum = '11/2';
            nSum = 2;
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                dbTotalSum;
                nSum;
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
            } else if (nSum === 11) {
                dbTotalSum = '11/2';
                nSum = 2;
            } else if (nSum === 22) {
                dbTotalSum = 22;
                nSum = 4;
            } else if (nSum === 33) {
                dbTotalSum = 33;
                nSum = 6;
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
            }
        }
    }
    if (dbTotalSum === 10) {
        cptEPNum.innerHTML = '<b>1</b>' ;
    } else if (dbTotalSum === 19) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 28) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 37) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 46) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 55) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 64) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 73) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === 82) {
        cptEPNum.innerHTML = '<b>1</b>';
    } else if (dbTotalSum === '11/2') {
        cptEPNum.innerHTML = '<b>11/2</b>';
    }
    else {
        cptEPNum.innerHTML = '<b>' + nSum + '</b>';
    };


    // Partner Soul Urge / Heart Desire Number 
    var suhdfName = fpfName.value.split(' ');
    count = 0;
    countList = [];
    suhdfName = Array.from(suhdfName);
    countHold = 0;
    for (let iterate  = 0; iterate < suhdfName.length; iterate++) {
        for ( let i = 0; i <= suhdfName[iterate].length; i++) {
            if ( String(suhdfName[iterate][i]).toLowerCase() === 'a' ) {
                count += 1;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'u' ) {
                count += 3;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'e' ) {
                count += 5;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'o' ) {
                count += 6;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'i' ) {
                count += 9;
            } else if ( String(suhdfName[iterate][i]).toLowerCase() === 'y' ) {
                count += 7;
            }
            else {
                count+=0;
            }
        };
        if (count < 10) {
            countHold += count;
        } else if (count === 10) {
            countHold += 1
        } else if (count === 11 || count === 22 || count === 33) {
            countHold += count;
        } else if (count > 10) {
            dbSplit = String(count).split('');
            nSum = eval(dbSplit.join('+'));
            if (nSum < 10) {
                nSum;
            } else if (nSum === 10) {
                nSum = 1;
            } else if (nSum === 11 || nSum === 22 || nSum === 33 ) {
                nSum;
            } else if (nSum > 10) {
                dbSplit = String(count).split('');
                nSum = eval(dbSplit.join('+'));
            }
            countHold += nSum;
        }
        count = 0;
    };
    if (countHold < 10) {
        dbTotalSum = countHold;
        nSum = countHold;
        cptHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 10) {
        dbTotalSum = 10;
        nSum = 1;
        cptHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 11) {
        dbTotalSum = '11/2';
        nSum = 2
        cptHDNum.innerHTML = '<b>11/2</b>';
    } else if (countHold === 22) {
        dbTotalSum = 22;
        nSum = 4
        cptHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold === 33) {
        dbTotalSum = 33;
        nSum = 6;
        cptHDNum.innerHTML = '<b>' + nSum + '</b>';
    } else if (countHold > 10) {
        dbTotalSum = countHold;
        dbSplit = String(countHold).split('');
        nSum = eval(dbSplit.join('+'));
        if (nSum < 10) {
            dbTotalSum;
            nSum;
            cptHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 10) {
            dbTotalSum = 10;
            nSum = 1;
            cptHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 11) {
            dbTotalSum = '11/2';
            nSum = 2;
            cptHDNum.innerHTML = '<b>11/2</b>';
        } else if (nSum === 22) {
            dbTotalSum = 22;
            nSum = 4;
            cptHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum === 33) {
            dbTotalSum = 33;
            nSum = 6;
            cptHDNum.innerHTML = '<b>' + nSum + '</b>';
        } else if (nSum > 10) {
            dbTotalSum = nSum;
            dbSplit = String(dbTotalSum).split('');
            nSum = eval(dbSplit.join('+'));
            cptHDNum.innerHTML = '<b>' + nSum + '</b>';

            if (nSum < 10) {
                dbTotalSum;
                nSum;
                cptHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 10) {
                dbTotalSum = 10;
                nSum = 1;
                cptHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 11) {
                dbTotalSum = 11;
                nSum = 2;
                cptHDNum.innerHTML = '<b>11/2</b>';
            } else if (nSum === 22) {
                dbTotalSum = 22;
                nSum = 4;
                cptHDNum.innerHTML = '<b>' + nSum + '</b>';
            } else if (nSum === 33) {
                dbTotalSum = 33;
                nSum = 6;
                cptHDNum.innerHTML = '<b>' + nSum + ' </b>';
            } else if (nSum > 10) {
                dbTotalSum = nSum;
                dbSplit = String(dbTotalSum).split('');
                nSum = eval(dbSplit.join('+'));
                cptHDNum.innerHTML = '<b>' + nSum + ' </b>';
            }
        }
    };

    // Partner personality number 
    pnfName = fpfName.value.split(' ');
    count = 0;
    countList = [], countHold = 0;
    pnfName = Array.from(pnfName);
    
    for (let iterate  = 0; iterate < pnfName.length; iterate++) {
        var L = pnfName[iterate].length
        if (pnfName[iterate][L - 1] === 'y' || pnfName[iterate][L - 1] === 'Y') {
            pnfName[iterate]=(pnfName[iterate]).slice(0, -1);
        }
        for ( let i = 0; i <= pnfName[iterate].length; i++) {
            if (String(pnfName[iterate][i]).toLowerCase() === 'j' ||  String(pnfName[iterate][i]).toLowerCase() === 's'  ) {
                count += 1;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'b' || String(pnfName[iterate][i]).toLowerCase() === 'k' || String(pnfName[iterate][i]).toLowerCase() === 't') {
                count += 2;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'c' || String(pnfName[iterate][i]).toLowerCase() === 'l' ) {
                count += 3;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'd' || String(pnfName[iterate][i]).toLowerCase() === 'm' || String(pnfName[iterate][i]).toLowerCase() === 'v') {
                count += 4;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'n' || String(pnfName[iterate][i]).toLowerCase() === 'w') {
                count += 5;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'f' || String(pnfName[iterate][i]).toLowerCase() === 'x') {
                count += 6;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'g' || String(pnfName[iterate][i]).toLowerCase() === 'p' || String(pnfName[iterate][i]).toLowerCase() === 'y'  ) {
                count += 7;
            } else if (String(pnfName[iterate][i]).toLowerCase() === 'h' || String(pnfName[iterate][i]).toLowerCase() === 'q' || String(pnfName[iterate][i]).toLowerCase() === 'z') {
                count += 8;
            } else if ( String(pnfName[iterate][i]).toLowerCase() === 'r' ) {
                count += 9;
            } else {
                count += 0;
            }
            
        };
        // console.log(count);


        if (count < 10) {
            count;
        } else if (count === 10) {
            count = 1; 
        } else if (count === 11 || count === 22 || count === 33) {
            count;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            count = eval(pnSplit.join('+'));

        }
        countHold += count;
        count = 0;
    };
    // console.log(countHold)

    if (countHold < 10) {
        countHold;
    } else if (countHold === 10) {
        countHold = 1;
    } else if (countHold === 11 || countHold === 22 || countHold === 33 || countHold === 13 || countHold === 14 || countHold === 16 || countHold === 19) {
        countHold;
    } else if (countHold > 10) {
        countHold;
        
        
    }

    // console.log(countHold)
    count = countHold;
    if (count < 10) {
        count;
        cptPNum.innerHTML = '<b>' + count + '</b>' ;
    } else if (count == 10) {
        count = 1;
        cptPNum.innerHTML = '<b>1</b>' ;
    } else if (count == 11) {
        count = 11;
        cptPNum.innerHTML = '<b>11/2</b>' ;
    }  else if ( count === 22 || count === 33) {
        count;
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 13) {
        count = 13;
        sum = 4;
        cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 14) {
        count = 14;
        sum = 5;
        cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 16) {
        count = 16;
        sum = 7;
        cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if ( count === 19) {
        count = 19;
        sum = 1;
        cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
    } else if (count > 10) {
        pnSplit = String(count).split('');
        sum = eval(pnSplit.join('+'));
        cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        count = sum

        if (count < 10) {
            count;
            cptPNum.innerHTML = '<b>' + count + '</b>' ;
        } else if (count == 10) {
            count = 1;
            cptPNum.innerHTML = '<b>1</b>' ;
        } else if (count == 11) {
            count = 1;
            cptPNum.innerHTML = '<b>11/2</b>' ;
        } else if (count === 11 || count === 22 || count === 33) {
            count;
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 13) {
            count = 13;
            sum = 4;
            cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 14) {
            count = 14;
            sum = 5;
            cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 16) {
            count = 16;
            sum = 7;
            cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if ( count === 19) {
            count = 19;
            sum = 1;
            cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
        } else if (count > 10) {
            pnSplit = String(count).split('');
            sum = eval(pnSplit.join('+'));
            cptPNum.innerHTML = '<b>' +sum+ '</b>' ;
            count = sum
        }
    };

    // Partner Maturity Number 
    var lifePath = ((cptLPNum.textContent).trim()).split('/');
    lpHold = Number(lifePath[lifePath.length - 1]);
    mSplit = String(lpHold).split('');
    lpHold = eval(mSplit.join('+'));
    
    var expPath = ((cptEPNum.textContent).trim()).split('/');
    edHold = Number(expPath[expPath.length - 1])
    mSplit = String(edHold).split('');
    edHold = eval(mSplit.join('+'));
    
    count = lpHold + edHold;
    mSplit = String(count).split('');
    sum = eval(mSplit.join('+'));
    sum = count;

    if (sum < 10) {
        ptMNum.innerHTML = sum;
    } else if (sum === 10) {
        ptMNum.innerHTML = 1;
    } else if (sum === 11) {
        ptMNum.innerHTML = '11/2';
    } else if (sum === 22) {
        ptMNum.innerHTML = '4';
    } else if (sum === 33) {
        ptMNum.innerHTML = '6';
    } else if (sum > 10) {
        mSplit = String(sum).split('');
        sum = eval(mSplit.join('+'));
        if (sum < 10) {
            sum;
        } else if (sum === 10) {
            sum  = 1;
        } else if (sum === 11) {
            sum = '11/2'
        } else if (sum === 22) {
            sum = '4'
        } else if (sum === 33) {
            sum = '6'
        } else if (sum > 10) {
            mSplit = String(sum).split('');
            sum = eval(mSplit.join('+'));

            if (sum < 10) {
                sum;
            } else if (sum === 10) {
                sum  = 1;
            } else if (sum === 11) {
                sum = '2'
            } else if (sum === 22) {
                sum = '4'
            } else if (sum === 33) {
                sum = '6'
            } else if (sum > 10) {
                mSplit = String(sum).split('');
                sum = eval(mSplit.join('+'));
            }
        }
        ptMNum.innerHTML = sum;
    };


    // lifePath 1 comparism #F27121
    var ylpnum = Number(cytLPNum.textContent);
    var plnum = Number(cptLPNum.textContent);

    if (ylpnum === 1) {
        if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 7  || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 2 || plnum === 6 || plnum === 9) {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 2) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 3) {
        if (plnum === 3 || plnum === 6 || plnum === 9  ) {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 ) {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 4) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8  ) {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 7 || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 9 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 5) {
        if (plnum === 1 || plnum === 5 || plnum === 7  || cptLPNum.textContent === '11/2' ) {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 8 || plnum === 9 ) {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 6 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    }  else if (ylpnum === 6) {
        if (plnum === 2 || plnum === 3 || plnum === 4 || plnum === 6 || plnum === 9  ) {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 8  || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 7) {
        if (plnum === 1 || plnum === 5 || plnum === 7  || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 4 || plnum === 8 || plnum === 9 ) {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 6 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 8) {
        if (plnum === 2 || plnum === 4 || plnum === 8  ) {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 5 || plnum === 6 || plnum === 7 || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 9) {
        if (plnum === 3 || plnum === 6 || plnum === 9 || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 5 || plnum === 7) {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    } else if (cytLPNum.textContent === '11/2') {
        if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 || plnum === 9 || cptLPNum.textContent === '11/2') {
            lpComp.textContent = 'Perfect';
            lpComp.style.color = '#05D087'
        } else if (plnum === 4 || plnum === 6 || plnum === 8) {
            lpComp.textContent = 'Good';
            lpComp.style.color = '#F8DE22'
        } else if (plnum === 3 ) {
            lpComp.textContent = 'Challenge';
            lpComp.style.color = '#F27121'
        } 
    };

    // Birthday Comparism 
    var ylpnum = Number(cytBDNum.textContent);
    var plnum = Number(cptBDNum.textContent);

    if (ylpnum === 1) {
        if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 7 || cptBDNum.textContent === '11/2') {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 2 || plnum === 6 || plnum === 9 ) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 2) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 || cptBDNum.textContent === '11/2') {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 3) {
        if (plnum === 3 || plnum === 6 || plnum === 9 ) {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 ) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 || cptBDNum.textContent === '11/2' ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 4) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 ) {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 7 || cptBDNum.textContent === '11/2' ) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 9 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 5) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || cptBDNum.textContent === '11/2' ) {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 8 || plnum === 9 ) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 6 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    }  else if (ylpnum === 6) {
        if (plnum === 2 || plnum === 3 || plnum === 4 || plnum === 6 || plnum === 9 ) {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 8  || cptBDNum.textContent === '11/2' ) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 7) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || cptBDNum.textContent === '11/2' ) {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 4 || plnum === 8 || plnum === 9 ) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 6 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 8) {
        if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 5 || plnum === 6 || plnum === 7 || cptBDNum.textContent === '11/2') {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 9) {
        if (plnum === 3 || plnum === 6 || plnum === 9 || cptBDNum.textContent === '11/2') {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 5 || plnum === 7) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    } else if (cytBDNum.textContent === '11/2') {
        if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 || plnum === 9 || cptBDNum.textContent === '11/2') {
            bdComp.textContent = 'Perfect';
            bdComp.style.color = '#05D087'
        } else if (plnum === 4 || plnum === 6 || plnum === 8) {
            bdComp.textContent = 'Good';
            bdComp.style.color = '#F8DE22'
        } else if (plnum === 3 ) {
            bdComp.textContent = 'Challenge';
            bdComp.style.color = '#F27121'
        } 
    };

    // Expression Compatiility 
    var ylpnum = Number(cytEPNum.textContent);
    var plnum = Number(cptEPNum.textContent);

    if (ylpnum === 1) {
        if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 7  || cptEPNum.textContent === '11/2') {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 2 || plnum === 6 || plnum === 9) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 2) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 || cptEPNum.textContent === '11/2') {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 3) {
        if (plnum === 3 || plnum === 6 || plnum === 9 ) {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 ) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 || cptEPNum.textContent === '11/2') {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 4) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 ) {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 7 || cptEPNum.textContent === '11/2') {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 9 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 5) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || cptEPNum.textContent === '11/2' ) {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 8 || plnum === 9 ) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 6 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    }  else if (ylpnum === 6) {
        if (plnum === 2 || plnum === 3 || plnum === 4 || plnum === 6 || plnum === 9 ) {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 8 || cptEPNum.textContent === '11/2' ) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 7) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || cptEPNum.textContent === '11/2' ) {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 4 || plnum === 8 || plnum === 9 ) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 6 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 8) {
        if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 5 || plnum === 6 || plnum === 7 || cptEPNum.textContent === '11/2') {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 9) {
        if (plnum === 3 || plnum === 6 || plnum === 9 || cptEPNum.textContent === '11/2') {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 5 || plnum === 7) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    } else if (cytEPNum.textContent === '11/2') {
        if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 || plnum === 9 || cptEPNum.textContent === '11/2') {
            expComp.textContent = 'Perfect';
            expComp.style.color = '#05D087';
        } else if (plnum === 4 || plnum === 6 || plnum === 8) {
            expComp.textContent = 'Good';
            expComp.style.color = '#F8DE22'
        } else if (plnum === 3 ) {
            expComp.textContent = 'Challenge';
            expComp.style.color = '#F27121'
        } 
    };

    // Heart's desire Compatibility 
    var ylpnum = Number(cytHDNum.textContent);
    var plnum = Number(cptHDNum.textContent);

    if (ylpnum === 1) {
        if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 7   || cptHDNum.textContent === '11/2') {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 2 || plnum === 6 || plnum === 9) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 2) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8  || cptHDNum.textContent === '11/2') {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 3) {
        if (plnum === 3 || plnum === 6 || plnum === 9  ) {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 ) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 || cptHDNum.textContent === '11/2' ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 4) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8  ) {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 7 || cptHDNum.textContent === '11/2') {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 9 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 5) {
        if (plnum === 1 || plnum === 5 || plnum === 7  || cptHDNum.textContent === '11/2' ) {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 8 || plnum === 9 ) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 6 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    }  else if (ylpnum === 6) {
        if (plnum === 2 || plnum === 3 || plnum === 4 || plnum === 6 || plnum === 9  ) {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 8 || cptHDNum.textContent === '11/2' ) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 7) {
        if (plnum === 1 || plnum === 5 || plnum === 7   || cptHDNum.textContent === '11/2') {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 4 || plnum === 8 || plnum === 9 ) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 6 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 8) {
        if (plnum === 2 || plnum === 4 || plnum === 8   ) {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 5 || plnum === 6  || plnum === 7 ||  cptHDNum.textContent === '11/2') {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 9) {
        if (plnum === 3 || plnum === 6 || plnum === 9  || cptHDNum.textContent === '11/2') {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 5 || plnum === 7) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    } else if (cytHDNum.textContent === '11/2') {
        if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 || plnum === 9 || cptHDNum.textContent === '11/2') {
            hdComp.textContent = 'Perfect';
            hdComp.style.color = '#05D087'
        } else if (plnum === 4 || plnum === 6 || plnum === 8) {
            hdComp.textContent = 'Good';
            hdComp.style.color = '#F8DE22'
        } else if (plnum === 3 ) {
            hdComp.textContent = 'Challenge';
            hdComp.style.color = '#F27121'
        } 
    };

    // Personality Compatibilty 
    var ylpnum = Number(cytPNum.textContent);
    var plnum = Number(cptPNum.textContent);

    if (ylpnum === 1) {
        if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 7 ||  cptPNum.textContent === '11/2') {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 2 || plnum === 6 || plnum === 9) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 2) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 || cptPNum.textContent === '11/2') {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 3) {
        if (plnum === 3 || plnum === 6 || plnum === 9 ) {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 ) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 || cptPNum.textContent === '11/2') {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 4) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 ) {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 7 || cptPNum.textContent === '11/2' ) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 9 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 5) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || cptPNum.textContent === '11/2' ) {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 8 || plnum === 9 ) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 6 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    }  else if (ylpnum === 6) {
        if (plnum === 2 || plnum === 3 || plnum === 4 || plnum === 6 || plnum === 9 ) {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 8  || cptPNum.textContent === '11/2') {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 7) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || cptPNum.textContent === '11/2' ) {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 4 || plnum === 8 || plnum === 9 ) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 6 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 8) {
        if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 5 || plnum === 6 || plnum === 7 || cptPNum.textContent === '11/2') {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 9) {
        if (plnum === 3 || plnum === 6 || plnum === 9 || cptPNum.textContent === '11/2') {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 5 || plnum === 7) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    } else if (cytPNum.textContent === '11/2') {
        if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 || plnum === 9 || cptPNum.textContent === '11/2') {
            pComp.textContent = 'Perfect';
            pComp.style.color = '#05D087'
        } else if (plnum === 4 || plnum === 6 || plnum === 8) {
            pComp.textContent = 'Good';
            pComp.style.color = '#F8DE22'
        } else if (plnum === 3 ) {
            pComp.textContent = 'Challenge';
            pComp.style.color = '#F27121'
        } 
    };

    // Maturity Compatibility 
    var ylpnum = Number(ytMNum.textContent);
    var plnum = Number(ptMNum.textContent);

    if (ylpnum === 1) {
        if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 7  || ptMNum.textContent === '11/2') {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 2 || plnum === 6 || plnum === 9) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 2) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 || ptMNum.textContent === '11/2' ) {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 3) {
        if (plnum === 3 || plnum === 6 || plnum === 9  ) {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 ) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 4 || plnum === 8 || ptMNum.textContent === '11/2') {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 4) {
        if (plnum === 2 || plnum === 4 || plnum === 6 || plnum === 8 ) {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 7 || ptMNum.textContent === '11/2') {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 5 || plnum === 9 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 5) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || ptMNum.textContent === '11/2' ) {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 8 || plnum === 9 ) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 6 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    }  else if (ylpnum === 6) {
        if (plnum === 2 || plnum === 3 || plnum === 4 || plnum === 6 || plnum === 9  ) {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 8 || ptMNum.textContent === '11/2' ) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 5 || plnum === 7 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 7) {
        if (plnum === 1 || plnum === 5 || plnum === 7 || ptMNum.textContent === '11/2' ) {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 3 || plnum === 4 || plnum === 8 || plnum === 9 ) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 6 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 8) {
        if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 5 || plnum === 6 || plnum === 7 || ptMNum.textContent === '11/2') {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 1 || plnum === 3 || plnum === 9 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ylpnum === 9) {
        if (plnum === 3 || plnum === 6 || plnum === 9 || ptMNum.textContent === '11/2') {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 1 || plnum === 5 || plnum === 7) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 2 || plnum === 4 || plnum === 8 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    } else if (ytMNum.textContent === '11/2') {
        if (plnum === 1 || plnum === 2 || plnum === 5 || plnum === 7 || plnum === 9 || ptMNum.textContent === '11/2') {
            mComp.textContent = 'Perfect';
            mComp.style.color = '#05D087'
        } else if (plnum === 4 || plnum === 6 || plnum === 8) {
            mComp.textContent = 'Good';
            mComp.style.color = '#F8DE22'
        } else if (plnum === 3 ) {
            mComp.textContent = 'Challenge';
            mComp.style.color = '#F27121'
        } 
    };

    var p = 0;

    var ylpnumP = ((cytLPNum.textContent).trim()).split('/');
    ylpnumP = ylpnumP[ylpnumP.length - 1];
    var plpnumP = ((cptLPNum.textContent).trim()).split('/');
    plpnumP = plpnumP[plpnumP.length - 1];

    if (lpComp.style.color === 'rgb(5, 208, 135)' & ylpnumP === plpnumP) {
        p+= 100
    } else if (lpComp.style.color === 'rgb(5, 208, 135)' & ylpnumP !== plpnumP) {
        p+= 90
    } else if (lpComp.style.color === 'rgb(248, 222, 34)') {
        p+= 80
    } else if (lpComp.style.color === 'rgb(242, 113, 33)') {
        p+= 70
    }


    var ylpnumP = ((cytBDNum.textContent).trim()).split('/');
    ylpnumP = ylpnumP[ylpnumP.length - 1];
    var plpnumP = ((cptBDNum.textContent).trim()).split('/');
    plpnumP = plpnumP[plpnumP.length - 1];

    if (bdComp.style.color === 'rgb(5, 208, 135)' & ylpnumP === plpnumP) {
        p+= 100
    } else if (bdComp.style.color === 'rgb(5, 208, 135)' & ylpnumP !== plpnumP) {
        p+= 90
    } else if (bdComp.style.color === 'rgb(248, 222, 34)') {
        p+= 80
    } else if (bdComp.style.color === 'rgb(242, 113, 33)') {
        p+= 70
    } 

    var ylpnumP = ((cytEPNum.textContent).trim()).split('/');
    ylpnumP = ylpnumP[ylpnumP.length - 1];
    var plpnumP = ((cptEPNum.textContent).trim()).split('/');
    plpnumP = plpnumP[plpnumP.length - 1];

    if (expComp.style.color === 'rgb(5, 208, 135)' & ylpnumP === plpnumP) {
        p+= 100
    } else if (expComp.style.color === 'rgb(5, 208, 135)' & ylpnumP !== plpnumP) {
        p+= 90
    } else if (expComp.style.color === 'rgb(248, 222, 34)') {
        p+= 80
    } else if (expComp.style.color === 'rgb(242, 113, 33)') {
        p+= 70
    }

    var ylpnumP = ((cytHDNum.textContent).trim()).split('/');
    ylpnumP = ylpnumP[ylpnumP.length - 1];
    var plpnumP = ((cptHDNum.textContent).trim()).split('/');
    plpnumP = plpnumP[plpnumP.length - 1];

    if (hdComp.style.color === 'rgb(5, 208, 135)' & ylpnumP === plpnumP) {
        p+= 100
    } else if (hdComp.style.color === 'rgb(5, 208, 135)' & ylpnumP !== plpnumP) {
        p+= 90
    } else if (hdComp.style.color === 'rgb(248, 222, 34)') {
        p+= 80
    } else if (hdComp.style.color === 'rgb(242, 113, 33)') {
        p+= 70
    }

    var ylpnumP = ((cytPNum.textContent).trim()).split('/');
    ylpnumP = ylpnumP[ylpnumP.length - 1];
    var plpnumP = ((cptPNum.textContent).trim()).split('/');
    plpnumP = plpnumP[plpnumP.length - 1];

    if (pComp.style.color === 'rgb(5, 208, 135)' & ylpnumP === plpnumP) {
        p+= 100
    } else if (pComp.style.color === 'rgb(5, 208, 135)' & ylpnumP !== plpnumP) {
        p+= 90
    } else if (pComp.style.color === 'rgb(248, 222, 34)') {
        p+= 80
    } else if (pComp.style.color === 'rgb(242, 113, 33)') {
        p+= 70
    }

    var ylpnumP = ((ytMNum.textContent).trim()).split('/');
    ylpnumP = ylpnumP[ylpnumP.length - 1];
    var plpnumP = ((ptMNum.textContent).trim()).split('/');
    plpnumP = plpnumP[plpnumP.length - 1];

    if (mComp.style.color === 'rgb(5, 208, 135)' & ylpnumP === plpnumP) {
        p+= 100
    } else if (mComp.style.color === 'rgb(5, 208, 135)' & ylpnumP !== plpnumP) {
        p+= 90
    } else if (mComp.style.color === 'rgb(248, 222, 34)') {
        p+= 80
    } else if (mComp.style.color === 'rgb(242, 113, 33)') {
        p+= 70
    }

    var per = parseInt(p/6);
    cpercent.textContent = per+'%';
    
    

})