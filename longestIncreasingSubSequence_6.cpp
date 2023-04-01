//LONGEST INCREASING SUB-SEQUENCE

#include<iostream>
#include<cmath>
using namespace std;
#include<string.h>


int main()
{
   int n;
   cin>>n;
   int arr[n];
   int LIS[n];    // Longest Increasing Subsequence
   for(int i=0;i<n;i++)
   {
      cin>>arr[i];
   }

   //memset(LIS,n,1);    // Used to initialize 1 or 0;{here 1}

   for(int i=0;i<n;i++)
   {
     LIS[i]= 1;
   }

   for(int i=1;i<n;i++)
   {
      for(int j=0;j<i;j++)
      {
         if(arr[i]>arr[j] && LIS[j]+1>LIS[i])
            LIS[i] = LIS[i]+1;
      }
   }

   cout<<*max_element(LIS, LIS + n);

   return 0;
}
