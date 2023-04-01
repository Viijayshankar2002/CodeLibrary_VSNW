#include <iostream>
#include<algorithm>
#include<cmath>
#include<limits>
#include <bits/stdc++.h>

int count_SetBits(int mask);

using namespace std;
int main() 
{
    int N;  // N people N task
    cin>>N;
    int cost[N][N];
    int Y = pow(2,N);
    int DP[Y];

    for(int i=0; i<N; i++)
    {
        for(int j=0; j<N; j++)
            cin>>cost[i][j];
    }

    //cout<<pow(2,N)<<"\n";
    for(int i=1; i<(pow(2,N)); i++)
    {
        DP[i] = INT_MAX;
    } 
    
    DP[0] = 0;
    int x ;
    for(int mask = 0; mask<(pow(2,N)); mask++)
    {
        x = count_SetBits(mask);
        for(int j=0; j<N; j++)
        {
            if(!(mask&(1<<j)))
            {
                DP[mask|1<<j] = min(DP[mask|1<<j] , DP[mask]+cost[x][j]);
            }
        }
    }
    cout<<"\n========================\n";
    for(int i=0; i<(pow(2,N)); i++)
        cout<<DP[i]<<"  ";
    
    return 0;
}

int count_SetBits(int mask)
{
    int count = 0;
    while(mask)
    {
        if(mask&01)
            count++;
        mask>>=1;
    }
    return count;
}
