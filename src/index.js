module.exports = function multiply(first,second){
	var firstArr = first.split('');
	var secondArr = second.split('');
	var res;
	var finalRes = [];
	var mem = 0;
	var mem1 = 0;
	for (var i = second.length-1; i >= 0; i--){
		res = [];
		for (var j = first.length - 1; j >= 0; j--) {
			var mult = secondArr[i]*firstArr[j]+mem;
			res.splice(0,0,mult%10);
			mem = Math.floor(mult/10);
		}
		if (mem){
			res.splice(0,0,mem);
			mem = 0;
		}
		if (i == second.length - 1){
			finalRes = res;
		}else{
			var x = second.length-1-i;
			for (x; x > 0; x--){
				res.push(0);
			}
			while (res.length != finalRes.length){
			finalRes.splice(0,0,0);
			}
					
			for (var x = finalRes.length - 1; x>=0; x--){
				finalRes[x] = finalRes[x] + res[x];
				if(finalRes[x]>9){
					var a = Math.floor(finalRes[x]/10);
					finalRes[x-1] += Math.floor(finalRes[x]/10);
					finalRes[x]=finalRes[x]%10;
					if(!finalRes[x-1]){
						finalRes.splice(0,0,a);
					}
				}
			}
		}
	}
	var arr = finalRes.join('');
	return(arr);
}