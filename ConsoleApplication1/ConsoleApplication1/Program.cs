using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] a = new string[]  { "a", "b", "c" ,"d","e","f","g"};
          //  string[] b = new string[a.Length];
            string b;

            for (int i = 0; i < a.Length/2; i++)
            {
                b = a[i];
                a[i] = a[a.Length - i - 1];
                a[a.Length - i - 1]=b;
                
            }
            for (int i = 0; i < a.Length; i++)
                Console.Write(a[i]);
            Console.ReadLine();
            
        }
    }
}
