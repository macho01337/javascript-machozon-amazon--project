import {formatCurrency} from '../scripts/utils/money.js';

if (formatCurrency(2095 === '20.95')){
    console.log('Test passed');
} else {
    console.log('Test failed');
}

if (formatCurrency(0)=== '0.00'){
    console.log('test passed');
} else{
    console.log('Test failed');
}