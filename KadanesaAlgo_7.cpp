
// Kadanes Algorith to get max sub Array sum with + and - numbers in array

#include <iostream>
using namespace std;
int main() 
{
    int n = 0;      // Size of Array
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    int t_sum=0;
    int sum=0;

    for(int i=0;i<n;i++)
    {
        t_sum = t_sum+a[i];
        if(t_sum<0)
            t_sum = 0;
        if(t_sum>sum)
            sum = t_sum;
    }
    cout<<sum<<endl;

    return 0;
}
