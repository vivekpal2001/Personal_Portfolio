#include <iostream>
#include <stack>

using namespace std;

string removeKdigits(string num, int k) {
    stack<char> s;
    
    for (char digit : num) {
        while (k > 0 && !s.empty() && s.top() > digit) {
            s.pop();
            k--;
        }
        
        if (!s.empty() || digit != '0') {
            s.push(digit);
        }
    }
    
    while (k > 0 && !s.empty()) {
        s.pop();
        k--;
    }
    
    string result;
    while (!s.empty()) {
        result = s.top() + result;
        s.pop();
    }
    
    return result.empty() ? "0" : result;
}

int main() {
    string str;
    cout<<"enter the string :";
    getline(cin,str); //= "1432219";
    int k;
    cout<<"enter the number of k : ";
    cin>>k;
    
    cout << removeKdigits(str, k) << endl;

    return 0;
}