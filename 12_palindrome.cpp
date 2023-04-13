// C++ program for online algorithm for palindrome checking
#include<bits/stdc++.h>
using namespace std;
	
#define d 256
	
#define q 103
	
void checkPalindromes(string str)
{
	int N = str.size();
	
	cout << str[0] << " Yes" << endl;
	
	if (N == 1) return;
	int firstr = str[0] % q;
	int second = str[1] % q;
	
	int h = 1, i, j;
	

	for (i=1; i<N; i++)
	{
		if (firstr == second)
		{
			
			for (j = 0; j < i/2; j++)
			{
				if (str[j] != str[i-j])
					break;
			}
			(j == i/2)? cout << str[i] << " Yes" << endl: cout << str[i] << " No" << endl;
		}
		else cout << str[i] << " No" << endl;
	
		if (i != N-1)
		{
			
			if (i%2 == 0)
			{
				h = (h*d) % q;
				firstr = (firstr + h*str[i/2])%q;
				
				second = (second*d + str[i+1])%q;
			}
			else
			{
				
				second = (d*(second + q - str[(i+1)/2]*h)%q
						+ str[i+1])%q;
			}
		}
	}
}
	

int main()
{
	string txt = "aabaacaabaa";
	checkPalindromes(txt);
	return 0;
}

