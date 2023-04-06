// Gives the Next lexicographical Order
#include <iostream>
#include<string.h>
using namespace std;
int main() 
{
    char input[10];
    cin>>input;
    int first,second;
    for(int i=(strlen(input)-2);i>=0;i--)
    {
        if(int(input[i])<int(input[i+1])){
            first = i;
            break;
        }
    }
    second = first+1;

    for(int i=first+2;i<strlen(input);i++){
        if(int(input[i])>int(input[first]) && int(input[second])>int(input[i]))
            second = i;
    }
     
    swap(input[first],input[second]);

    /*Next we need to sort array after index first
    Usually it is sorted but in reverse order*/

    const int len = strlen(input)-first-1;
    int p = 0;
    for(int i=0; i<len/2; i++)
    {
        swap(input[i+first+1], input[strlen(input)-p-1]);
        p++;
    }

    cout<<"\nNext Lexicographical Order {Dictionary order}\n\t"<<input<<endl;

    return 0;
}
