function quicksort(arr,p,q)
{
	if(p<q)
	{
		var pivotindex = partition(arr,p,q);
		quicksort(arr,p,q-1);
		quicksort(arr,p+1,q);
	}
}
function partition(arr,p,q)
{
	var pivot = arr[q];
	pivotindex = p;
	for (i = p; i < q; i++)
	{
		if(arr[i]<=pivot)
		{	
			var temp;
			temp = arr[i];
			arr[i] = arr[pivotindex];
			arr[pivotindex] = temp;	
			pivotindex++;
		}		
	}
			var temp;
			temp = arr[pivotindex];
			arr[pivotindex] = arr[q];
			arr[q] = temp;	
			pivotindex++;
}


var arr = [34,45,12,32,67,26];

quicksort(arr,0,5);
for (i = 0; i < arr.length; i++) {
  	print(arr[i]);
}
