using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Palindrome
    {
        static void Main()
        {
            string[] a = new string[] { "m", "a", "d", "a", "M", };
            string [] b= new string[5];
            string c;

            a.CopyTo(b,0);
            for (int i = 0; i < a.Length; i++)
            {
                c = a[i];
                a[i] = a[a.Length - i - 1];
                a[a.Length - i - 1] = c;
            }
           
            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] != b[i])
                    Console.WriteLine("Not polindrome");
                break;
            }
            
                   Console.WriteLine("polindrome");
                Console.ReadLine();
        }
    }
}
