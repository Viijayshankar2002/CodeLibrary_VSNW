// Gives the case inversion of all the characters in a char array

#include <iostream>
#include<string.h>
using namespace std;
int main() 
{
    char input[10];
    cin>>input;
    for(int i=0;i<strlen(input);i++)
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
