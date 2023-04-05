// Gives the case inversion of all the characters in a char array

#include <iostream>
using namespace std;
int main() 
{
    char input[10];
    cin>>input;
    for(int i=0;i<10;i++)
    {
        if(int(input[i])<97)
        {
            cout<<char(int(input[i])|32);
        }

        else
        {
            cout<<char(input[i]&(~32));
        }
    }

    return 0;
}
