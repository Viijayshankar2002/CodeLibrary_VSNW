
function search(pat, txt, q)
{
	let M = pat.length;
	let N = txt.length;
	let i, j;
	
    
	let p = 0;
	
    
	let t = 0;
	let h = 1;

	
    
	for(i = 0; i < M - 1; i++)
		h = (h * d) % q;

        

	for(i = 0; i < M; i++)
	{
		p = (d * p + pat[i].charCodeAt()) % q;
		t = (d * t + txt[i].charCodeAt()) % q;
	}

	
    
	for(i = 0; i <= N - M; i++)
	{

		
        
		if (p == t)
		{
			
			
            
			for(j = 0; j < M; j++)
			{
				if (txt[i+j] != pat[j])
					break;
			}

			
            
			if (j == M)
				document.write("Pattern found at index " +
								i + "<br/>");
		}

		

		if (i < N - M)
		{
			t = (d * (t - txt[i].charCodeAt() * h) +
					txt[i + M].charCodeAt()) % q;

			

			if (t < 0)
				t = (t + q);
		}
	}
}


let txt = "GEEKS FOR GEEKS";
let pat = "GEEK";


let q = 101;

search(pat, txt, q);
