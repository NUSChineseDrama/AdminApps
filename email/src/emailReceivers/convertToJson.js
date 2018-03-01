'use strict';
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: 'd7cf765aea650_.xlsx',
    header:{
	    rows: 1
	},
	columnToKey: {
		A: 'submissionId',
        G: 'name',
        H: 'email',
        J: 'showTime',
        M: 'numberOfTix'
    },
    outputJSON: true
});