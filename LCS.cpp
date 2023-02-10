 #include <iostream>
 using namespace std;
 int main() 
 {
    int len1,len2;
    char s1[1000];
    char s2[1000];
    cout<<"Enter the lengths two strings\n";
    cin>>len1>>len2;
    cout<<"Enter the first string\n";
    for(int i=0;i<len1;i++){
        cin>>s1[i];
    }
    cout<<"Enter the second string\n";
    for(int i=0;i<len2;i++){
        cin>>s2[i];
    }

    int LCS[len1+1][len2+1];
    for(int i=0;i<len1+1;i++)
    {
        for(int j=0;j<len2+1;j++)
        {
            LCS[i][j]=0;
        }
    }

    for(int i=1;i<=len1;i++)
    {
        for(int j=1;j<=len2;j++)
        {
            if(s1[i-1]==s2[j-1])
            {
                LCS[i][j] = LCS[i-1][j-1]+1;
            }
            else
               LCS[i][j] = max(LCS[i-1][j],LCS[i][j-1]); 
        }
    }

    for(int i=0;i<=len1;i++)
    {
        for(int j=0;j<=len2;j++)
        {
            cout<<LCS[i][j]<<" ";
        }
        cout<<"\n";
    }
 
    cout<<"Longest Common subsequence"<<LCS[len1][len2];
    return 0;
 }