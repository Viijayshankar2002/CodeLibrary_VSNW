#include <iostream>
using namespace std;
int main() 
{
    int count=0;
    int mask = 19;
    while(mask)
    {
        if(mask&01)
            count++;
        mask>>=1;
    }
    cout<<count;
    return 0;
}