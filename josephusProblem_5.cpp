// Josephus {Prisoners} Problem
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // Write C++ code here
    std::cout << "Hello world!";
    int N;
    cout<<"Enter the number of prisoners : ";
    cin>>N;
    int x = log10(N)/log10(2);
    //cout<<x<<endl;
    //int alive;
    cout<<(N<<1)+1-pow(2,x+1);

    return 0;
}
