// Gives the first set bit from LSB side (leftside)

#include <iostream>
using namespace std;
int main() 
{
    int x;
    cin>>x;
    int y = x & -x;
    cout<<y<<endl;

    return 0;
}
