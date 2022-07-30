// Basic C# program to rearrange letters in alphabetical order

using System;
using System.Collections.Generic;

namespace cs
{
    public class Program {
        public static void Main(string[] args) {
            string str = "random letters to be sorted";
            // Returns "abddeeeelmnooorrrsstttt"
            char[] ch = str.ToCharArray();
            int n = ch.Length;
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (ch[j] > ch[j + 1]) {
                        char temp = ch[j];
                        ch[j] = ch[j + 1];
                        ch[j + 1] = temp;
                    }
                }
            }
            string s = new string(ch);
            Console.WriteLine(s);
        }
    }
}
