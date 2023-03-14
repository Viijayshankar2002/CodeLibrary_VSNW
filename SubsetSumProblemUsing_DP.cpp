#include <iostream>
using namespace std;
int main() 
{

    int N;
    cin>>N;
    int arr[N];
    for(int i=0; i<N; i++)
    {
        cin>>arr[i];
    }
    int sum;
    cin>>sum;
    int SS[N+1][N+1];
    
    for(int j=1;j<=sum; j++)
        SS[0][j] = 0;

    for(int i=0;i<=N; i++)
        SS[i][0] = 1;

    for(int i=1; i<=N; i++)
    {
        for(int j=1; j<=sum; j++)
        {
            if(SS[i-1][j]==1)
                SS[i][j] = 1;
            else
            {
                if(arr[i-1]>j)
                    SS[i][j] = 0;

                else
                    SS[i][j] = SS[i-1][j-arr[i-1]];
            }
        }
    }

    printf("%d",SS[N][sum]);
    return 0;
}