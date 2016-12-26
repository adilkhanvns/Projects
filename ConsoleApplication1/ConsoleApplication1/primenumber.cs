using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class primenumber
    {
        static void Main()
        
        {
            int i = 13;
            int flag=0;
            for (int j = 2; j < i / 2; j++)
            {
                if (i % j == 0)
                {
                    flag = 1; break;
                }
            }
            if (flag == 0 && i > 1)
                Console.WriteLine("prime number");
            else
                Console.WriteLine("not prime number");
            Console.ReadLine();
        }
    }
}
